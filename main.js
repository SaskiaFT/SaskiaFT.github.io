//Print text delayed
function printDelayedText(text, elementId, delay) {
  let i = 0;
  const element = document.getElementById(elementId);
  const timer = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(timer);
    }
  }, delay);

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

// When button is clicked "Click here to continue onwards" this functionallity displays section 2
// function showSection2() {
//   const section2 = document.getElementById("section-2");
//   section2.style.display = "block";
// }

// When button is clicked "Click here to continue onwards" this functionallity displays section 2
function showSection3() {
  const section3 = document.getElementById("section-3");
  section3.style.display = "block";
}

// Functionality that displays the entered Teamname back to the user
function showTeamName() {
  const teamName = document.getElementById("team-name").value;
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `Nice to meet you, ${teamName}!`;
  const section4 = document.getElementById("section-4");
  section4.style.display = "block";
}

// When "PART 1: The QUIZ" button is clicked this functionallity displays section 5
function showSection5() {
  const section5 = document.getElementById("section-5");
  section5.style.display = "block";
}

  // When "submit" button is clicked this functionallity takes input, produces output and displays section 5
function playQuiz() {
  const YorN = document.getElementById("play-quiz").value;
  const outputDiv = document.getElementById("quizOutput");
  outputDiv.innerHTML = `${YorN}, let's play a little quiz to warm up!`;
  // Show section 6
  const section6 = document.getElementById("section-6");
  section6.style.display = "block";
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
    const q1CorrectAnswer = "B";
    const q2CorrectAnswer = "A";
    const q3CorrectAnswer = "A";
    const q4CorrectAnswer = "A";
    const q5CorrectAnswer = "A";

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
    const correctAnswer = "castle shadow"; //add multiple right answers!!!!!!!!
    const userInput = document.getElementById("userInput").value;
    const messageElement = document.getElementById("riddleMessage");
    
    if (userInput.toLowerCase() === correctAnswer) {
      messageElement.textContent = `Congratulations, you answered correctly! 
      You may find your first Quest in the Bed Chamber.\n\n\n
      When you have figured out the answer, please fill it in below.\n
      The first number is 5 ;)`;
      const section8 = document.getElementById("section-8");
      section8.style.display = "block";
    } else {
      messageElement.textContent = "Sorry, that's incorrect. Please try again.";
    }
  }

  function checkPuzzleAnswer() {
    const correctAnswer = "1111";
    const userInput = document.getElementById("inputNumberPuzzle").value;
    const messageElement = document.getElementById("puzzleMessage");
    
    if (userInput === correctAnswer) {
      messageElement.textContent = `Congratulations, you answered correctly!`;
      const section9 = document.getElementById("section-9");
      section9.style.display = "block";
    } else {
      messageElement.textContent = "Sorry, that's incorrect. Please try again.";
    }
  }

  function checkLyricsAnswer() {
    const correctAnswer = `never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you`;
    const userInput = document.getElementById("lyricsInput").value;
    const messageElement = document.getElementById("lyricsMessage");
    
    if (userInput.toLowerCase() === correctAnswer) {
      messageElement.textContent = `Congratulations, you answered correctly!`;
      // const section9 = document.getElementById("section-9");
      // section9.style.display = "block";
    } else {
      messageElement.textContent = "Sorry, that's incorrect. Please try again.";
    }
  }