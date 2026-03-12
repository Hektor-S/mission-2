console.log("hello world");

//buttons
const btnAll = document.getElementsByClassName("button");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const reset = document.getElementById("reset")

const winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const xSquares = [];
const oSquares = [];
const pickedSquares = [];
const totalSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let randomNum = Math.floor(Math.random() * totalSquares.length);
console.log(randomNum);



function checkWin(playerSquares) {
  return winCombos.some((combo) =>
    combo.every((square) => playerSquares.includes(square)),
  );
}


const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function () {

  for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].innerHTML = "_";
  }

  pickedSquares.length = 0;
  xSquares.length = 0;
  oSquares.length = 0;

});

btn1.addEventListener("click", function (event) {
  if (pickedSquares.includes(1)) {
    return;
  } else {
    pickedSquares.push(1);
    xSquares.push(1);
    btn1.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn2.addEventListener("click", function (event) {
  if (pickedSquares.includes(2)) {
    return;
  } else {
    pickedSquares.push(2);
    xSquares.push(2);
    btn2.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn3.addEventListener("click", function (event) {
  if (pickedSquares.includes(3)) {
    return;
  } else {
    pickedSquares.push(3);
    xSquares.push(3);
    btn3.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn4.addEventListener("click", function (event) {
  if (pickedSquares.includes(4)) {
    return;
  } else {
    pickedSquares.push(4);
    xSquares.push(4);
    btn4.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn5.addEventListener("click", function (event) {
  if (pickedSquares.includes(5)) {
    return;
  } else {
    pickedSquares.push(5);
    xSquares.push(5);
    btn5.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn6.addEventListener("click", function (event) {
  if (pickedSquares.includes(6)) {
    return;
  } else {
    pickedSquares.push(6);
    xSquares.push(6);
    btn6.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn7.addEventListener("click", function (event) {
  if (pickedSquares.includes(7)) {
    return;
  } else {
    pickedSquares.push(7);
    xSquares.push(7);
    btn7.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn8.addEventListener("click", function (event) {
  if (pickedSquares.includes(8)) {
    return;
  } else {
    pickedSquares.push(8);
    xSquares.push(8);
    btn8.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);
    console.log(pickedSquares);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});

btn9.addEventListener("click", function (event) {
  if (pickedSquares.includes(9)) {
    return;
  } else {
    pickedSquares.push(9);
    xSquares.push(9);
    btn9.innerHTML = "X";

    if (checkWin(xSquares)) {
      alert("Player wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }

    // console.log(pickedSquares);
    const avSquares = totalSquares.filter(function (element, index, array) {
      return !pickedSquares.includes(element);
    });
    let randomNum = Math.floor(Math.random() * avSquares.length);
    console.log(avSquares);
    console.log(randomNum);
    let randomSquare = avSquares[randomNum];

    const botBtn = document.getElementById("btn" + randomSquare);
    botBtn.innerHTML = "O";
    pickedSquares.push(randomSquare);
    oSquares.push(randomSquare);

    if (checkWin(oSquares)) {
      alert("Bot wins!");
      pickedSquares.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
      return;
    }
  }
});
// console.log(pickedSquares);
