console.log("welcome to my tic tac toe");
let turn = "x";
let gameover = false;
let torn = true;

// function to change the turn
const changeturn = () => {
  if (torn) {
    return turn === "x" ? "0" : "x";
  } else {
    return "";
  }
};

// function to check for a win
let checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
    [2, 5, 8, 15, 15, 90],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      torn = false;
      console.log("false");
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won 😍";

      document.querySelector(".line").style.width = `20vw`;
      gameover = true;
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

// main logic

let boxes = document.getElementsByClassName("su2");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
        boxtext.innerText = turn;
        turn = changeturn();
        
        checkwin();
        if (!gameover) {
      
        document.getElementsByClassName("info")[0].innerText =
          "Turn  for " + turn;
      }
    }
  });
});
// add reset buttom
reset.addEventListener("click", () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  torn = true;
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "x";
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".line").style.width = `0`;
});

//media query
console.log("htttttsssssssssss");
var x = window.matchMedia("(max-width:400px)");

if (x.matches) {
  console.log("Hello media");
}

x.addEventListener("change", function (x) {
  if (x.matches) {
    console.log("media mathces");
  }
});
