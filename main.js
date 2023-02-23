// Show delayed text and when it is finished show new section
function showDelayedText(text, delay, callback) {
  var element = document.getElementById("introduction-text");
  element.innerHTML = "";

  var index = 0;
  function addLetter() {
    element.innerHTML += text[index];
    index++;
    if (index >= text.length) {
      if (callback) callback();
      return;
    }
    setTimeout(addLetter, delay);
  }

  setTimeout(addLetter, delay);
}

// Show section 3 
function showSection3() {
  var section = document.getElementById("section-3");
  section.style.display = "block";
}

// Print text delayed but first check if the element is visible before starting the text printing.
// offsetParent property of the element to check if it is visible. If the offsetParent is null, the element is not displayed, so the function does not start printing the text. Once the element is visible, 
// the function begins printing the text.
function printDelayedTextDelayed(text, elementId, delay) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id '${elementId}' not found.`);
    return;
  }
  let i = 0;
  const intervalId = setInterval(function() {
    if (element.offsetParent !== null && i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else if (i >= text.length) {
      clearInterval(intervalId);
    }
  }, delay);
}

// Plays audio dragon song
function playDragonsong() {
  // console.log("myFunction was called!");
  var audio = document.getElementById("dragonSong");
  audio.play();
}

// Plays audio trol song
function playTrolsong() {
  // console.log("myFunction was called!");
  var audio = document.getElementById("trolSong");
  audio.play();
}

// Functionality that displays the entered Teamname back to the user
function showTeamName() {
  const teamName = document.getElementById("team-name").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `Nice to meet you, ${teamName}!`;
  const section4 = document.getElementById("section-4");
  section4.style.display = "block";
}

function checkQuizYoN() {
  const correctAnswer = "yes"; 
  const userInput = document.getElementById("userInput").value;
  const messageElement = document.getElementById("quizMessage");
  
  if (userInput.toLowerCase() === correctAnswer) {
    messageElement.textContent = `Let's start!`;
    showQuiz();
  } else {
    messageElement.textContent = "Let's start anyway";
    showQuiz();
  }
}

  // The showQuiz() function sets the display style of the "quiz" section to "block" when the button is clicked, 
  // showing the quiz on the page. 
  // The submitQuiz() function will be used to grade the quiz and display the results.
  function showQuiz() {
    document.getElementById("quiz").style.display = "block";
  }
  
  // You can use the submitQuiz() function to collect the user's answers from the form and compare them to the 
  // correct answers. 
  // You can then display the user's score and any feedback or explanations for the correct answers.
  function submitQuiz() {
    const q1CorrectAnswer = "A";
    const q2CorrectAnswer = "B";
    const q3CorrectAnswer = "A";
    const q4CorrectAnswer = "C";
    const q5CorrectAnswer = "C";

    const q1Answer = document.querySelector('input[name="q1"]:checked').value;
    const q2Answer = document.querySelector('input[name="q2"]:checked').value;
    const q3Answer = document.querySelector('input[name="q3"]:checked').value;
    const q4Answer = document.querySelector('input[name="q4"]:checked').value;
    const q5Answer = document.querySelector('input[name="q5"]:checked').value;

    let score = 0;

    if (q1Answer === q1CorrectAnswer) {
      score++;
    }

    if (q2Answer === q2CorrectAnswer) {
      score++;
    }

    if (q3Answer === q3CorrectAnswer) {
      score++;
    }

    if (q4Answer === q4CorrectAnswer) {
      score++;
    }

    if (q5Answer === q5CorrectAnswer) {
      score++;
    }

    const resultText = `You answered ${score} out of 5 questions correctly.`;
    document.getElementById("result").textContent = resultText;
    if (score === 5) {
      //  Show section 7
      const section7 = document.getElementById("section-7");
      section7.style.display = "block";
     }
  }

  function checkRiddleAnswer() {
    const correctAnswer = "time";
    const userInput = document.getElementById("userInput").value;
    const messageElement = document.getElementById("riddleMessage");
    
    if (userInput.toLowerCase() === correctAnswer) {
      messageElement.textContent = `Congratulations, you answered correctly!`;
      const section8 = document.getElementById("section-8");
      section8.style.display = "block";
      playDragonsong()
    } else {
      messageElement.textContent = "Sorry, that's incorrect. Please try again.";
    }
  }

  function checkDragonAnswer() {
    const correctAnswer = "smaug";
    const userInput = document.getElementById("inputDragon").value;
    const messageElement = document.getElementById("dragonMessage");
    
    if (userInput === correctAnswer) {
      messageElement.textContent = `Congratulations, you answered correctly!`;
      const section9 = document.getElementById("section-9");
      section9.style.display = "block";
      playTrolsong();
    } else {
      messageElement.textContent = "Sorry, that's incorrect. Please try again.";
    }
  }

  function checkLyricsAnswer() {
    const correctAnswer = `7`;
    const userInput = document.getElementById("lyricsInput").value;
    const messageElement = document.getElementById("lyricsMessage");

    if (userInput.toLowerCase() === correctAnswer) {
      messageElement.textContent = `Congratulations, you winners! Go get your Treasure!`;
      // const section9 = document.getElementById("section-9");
      // section9.style.display = "block";
    } else {
      messageElement.textContent = "Sorry, that's incorrect. Please try again.";
    }
  }

  

  