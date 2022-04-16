# Continuous Integration and Continuous Deployment

After commit into this repo, CircleCi will run unit testing automatically, and Github Workflow will build and push the Docker Image to Docker Hub, our server is always listening the update for the docker image, if the digest is changed for the latest version, server will automatically pull the image and rebuilt the container.

## CircleCi Config

```bash
version: 2.1

orbs:
  node: circleci/node@4.7

jobs:
  build_backend:
    working_directory: ~/circleci/Backend/
    executor: node/default
    steps:
      - checkout:
          path: ~/circleci/
      - run:
          command: ls
      - node/install-npm
      - restore_cache:
          key: dependency-cache-{{ checksum "package-lock.json" }}
      - node/install-packages:
          app-dir: ~/circleci/Backend/
          cache-path: node_modules
          override-ci-command: npm i
      - save_cache:
          key: dependency-cache-{{ checksum "package-lock.json" }}
          paths:
            - ./node_modules
      - persist_to_workspace:
          root: .
          paths:
            - .
  build_frontend:
    working_directory: ~/circleci/Frontend/
    executor: node/default
    steps:
      - checkout:
          path: ~/circleci/
      - run:
          command: ls
      - node/install-yarn
      - restore_cache:
          key: dependency-cache-{{ checksum "yarn.lock" }}
      - node/install-packages:
          app-dir: ~/circleci/Frontend/
          cache-path: node_modules
          override-ci-command: yarn
      - save_cache:
          key: dependency-cache-{{ checksum "yarn.lock" }}
          paths:
            - ./node_modules
      - persist_to_workspace:
          root: .
          paths:
            - .

  test_backend:
    working_directory: ~/circleci/Backend/
    docker:
      - image: cimg/node:current
    steps:
      - attach_workspace:
          at: .
      - run:
          name: Backend Test
          command: npm test

  lint_backend:
    working_directory: ~/circleci/Backend/
    docker:
      - image: cimg/node:current
    steps:
      - attach_workspace:
          at: .
      - run:
          name: Backend Lint Test
          command: npm run lint

  lint_frontend:
    working_directory: ~/circleci/Frontend/
    docker:
      - image: cimg/node:current
    steps:
      - attach_workspace:
          at: .
      - run:
          name: Frontend Lint Test
          command: yarn lint

workflows:
  version: 2
  build_and_test:
    jobs:
      - build_backend
      - test_backend:
          requires:
            - build_backend
      - lint_backend:
          requires:
            - build_backend
      - build_frontend
      - lint_frontend:
          requires:
            - build_frontend
```

## Docker Workflow

```bash
name: Docker Continuous Deployment

on:
  push:
    paths:
      - 'Backend/**'
      - 'Backend/**/**'
      - 'Backend/**/**/**'
      - 'Backend/**/**/**/**'
  pull_request:
    paths:
      - Backend

defaults:
  run:
    working-directory: ./Backend

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: |
        docker run --privileged --rm tonistiigi/binfmt --install all
        docker login -u="${{ secrets.DOCKER_UN }}" -p="${{ secrets.DOCKER_PW }}"
        docker buildx create --name krunkbuilder
        docker buildx ls
        docker buildx use krunkbuilder
    - name: Build the Docker image date
      run: docker buildx build . -t krunk/chatbot-ai-backend:$(date +%s) --platform=linux/arm64,linux/amd64 --push
    - name: Build the Docker image latest
      run: docker buildx build . -t krunk/chatbot-ai-backend:latest --platform=linux/arm64,linux/amd64 --push
```
