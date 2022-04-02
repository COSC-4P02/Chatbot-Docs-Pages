# Deploy on server

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [Python3](https://www.python.org)

## Backend

<code-group>
<code-block title="NPM">
```bash
cd Backend
pip3 install -r requirement.txt
npm install
npm run serve
```
</code-block>
</code-group>

## Frontend

<code-group>
<code-block title="YARN">
```bash
cd Frontend
yarn
yarn build
```
</code-block>
</code-group>

Upload `dist` folder to server