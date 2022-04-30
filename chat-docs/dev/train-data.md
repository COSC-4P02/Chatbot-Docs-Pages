# Train QnA

## Question
```js
manager.addDocument('en', 'Get Started', 'agent.start');
```
## Answer
```js
manager.addAnswer('en', 'agent.start', 'We are starting now');
```

## With Named Entity Text (NER)
```js
// Named Entity Text
manager.addNamedEntityText('brockCourse', 'COSC-4P01', ['en'], ['COSC 4P01','COSC-4P01','COSC4P01','COSC401','COSC 401']);

// Question
manager.addDocument('en', 'What is %brockCourse%', 'brock.course.des');

// Answer
manager.addAnswer('en', 'brock.course.des', 'The {{brockCourse}} is a fun Course');
```


# Action "!" in Answer

## Send json directly
```js
!json-{"type":"button","text":"You can reach us at 1812 Sir Isaac Brock Way St. Catharines, ON L2S 3A1 Canada","disableInput":false,"options":[{"text":"Open in Google Maps","value":"https://goo.gl/maps/LhZQxd2xQ86LZUAP7","action":"url"}]}
```
## Make actions in answerProcess.js
```js
!covidNiagara
!courseDes
!courseTime
!courseLocation
...
```