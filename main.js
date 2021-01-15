// Action on "Count" button
const submitButton = document.querySelector('#count');
submitButton.addEventListener('click', showSavings);

function showSavings() {
  let salary = document.querySelector('#salary').value;
  let tenPercent = salary * 0.1;
  let twentyPercent = salary * 0.2;
  let thirtyPercent = salary * 0.3;
  let fortyPercent = salary * 0.4;
  document.querySelector('.ten').innerText = tenPercent;
  document.querySelector('.twenty').innerText = twentyPercent;
  document.querySelector('.thirty').innerText = thirtyPercent;
  document.querySelector('.forty').innerText = fortyPercent;
}


// Action on "Read more" button 10%
const blueButton = document.querySelector('#blueButton');
blueButton.addEventListener('click', () => {
  showInfo("infoBlue", blueButton);
});

/*function showBlueInfo() {
  let moreText = document.querySelector('#infoBlue');

  if (getComputedStyle(moreText).display === 'none') {
    blueButton.innerText = 'Hide';
    moreText.style.display = 'inline';
  } else {
    blueButton.innerText = 'Read more';
    moreText.style.display = 'none';
  }
}*/

// Read more 20%
const greenButton = document.querySelector('#greenButton');
greenButton.addEventListener('click', () => {
  showInfo("infoGreen", greenButton);
});
/*
function showGreenInfo() {
  let moreText = document.querySelector('#infoGreen');

  if (getComputedStyle(moreText).display === 'none') {
    greenButton.innerText = 'Hide';
    moreText.style.display = 'inline';
  } else {
    greenButton.innerText = 'Read more';
    moreText.style.display = 'none';
  }
}
*/

// Read more 30%
const yellowButton = document.querySelector('#yellowButton');
yellowButton.addEventListener('click', () => {
  showInfo("infoYellow", yellowButton);
});
/*
function showYellowInfo() {
  let moreText = document.querySelector('#infoYellow');

  if (getComputedStyle(moreText).display === 'none') {
    yellowButton.innerText = 'Hide';
    moreText.style.display = 'inline';
  } else {
    yellowButton.innerText = 'Read more';
    moreText.style.display = 'none';
  }
}*/



// Read more 40%
const orangeButton = document.querySelector('#orangeButton');
orangeButton.addEventListener('click', () => {
  showInfo("infoOrange", orangeButton);
});
/*
function showOrangeInfo() {
  let moreText = document.querySelector('#infoOrange');

  if (getComputedStyle(moreText).display === 'none') {
    orangeButton.innerText = 'Hide';
    moreText.style.display = 'inline';
  } else {
    orangeButton.innerText = 'Read more';
    moreText.style.display = 'none';
  }
}
*/

function showInfo(textId, button) {
  let moreText = document.getElementById(textId);

  if (getComputedStyle(moreText).display === 'none') {
    button.innerText = 'Hide';
    moreText.style.display = 'inline';
  } else {
    button.innerText = 'Read more';
    moreText.style.display = 'none';
  }
}