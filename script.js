// * Exercise 1
const arrayExercise1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const exercise1 = document.getElementById('exercise1');
const alertDaySelected = () => {
  const numberSelected = parseInt(prompt('Enter a number between 0 and 6'));
  return alert(arrayExercise1[numberSelected]);
}
exercise1.addEventListener('click', alertDaySelected)

// * Exercise 2
const exercise2 = document.getElementById('exercise2');
const arrayExcersice2 = [true, false]
const alertTrueOrFalse = () => {
  numberEntered = parseInt(prompt('Enter a number between 0 and 9'));
  if (numberEntered >= 0 && numberEntered <= 9) {
    return alert(arrayExcersice2[0])
  } else {
    return alert(arrayExcersice2[1])
  }
}
exercise2.addEventListener('click', alertTrueOrFalse)

// * Exercise 3
const exercise3 = document.getElementById('exercise3');
const arrayExercise3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumArrayElements = () => {
  return alert(arrayExercise3.reduce((acc, curr) =>  acc + curr));
}
exercise3.addEventListener('click', sumArrayElements);