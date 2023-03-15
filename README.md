# Quiz App

This is a React-based Quiz application that allows users to answer multiple-choice questions and see their score. The application fetches a set of questions from a trivia API and displays them to the user.

The app contains four components:

1- Questions.js: This component fetches the set of questions from the trivia API using the "getQuestions" function and maps over them to display each question. It also manages the state of the selected answer for each question, the score, and whether the quiz is over or not. The component provides two functions: "checkAnswers" and "resetGame". The "checkAnswers" function is used to check the selected answers and calculate the score of the user. The "resetGame" function is used to reset the game by fetching a new set of questions.

2- Question.js: This component is used to display a single question with its options. It shuffles the options randomly and manages the state of the selected answer for each question. The component also highlights the correct answer if the user selects the wrong one.

3- Navbar.js

4- Main.js

## Functionalities:

* Fetches a set of 10 questions from a trivia API and displays them to the user
* Allows the user to select an answer for each question
* Highlights the correct answer if the user selects the wrong one
* Calculates and displays the score of the user after answering all questions
* Allows the user to reset the game by fetching a new set of questions.

![Quiz App](https://user-images.githubusercontent.com/71367001/225212177-f9688a97-58ec-4b50-9a64-fff1bbc72e17.gif)

Live: https://reliable-beijinho-39b89b.netlify.app/
