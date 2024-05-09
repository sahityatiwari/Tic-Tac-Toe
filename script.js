let boxes = document.querySelectorAll(".button");
let resetBtn = document.querySelector("#rst_bttn");
let msgcont = document.querySelector(".msgcont");
let msgdisplay = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");

let true0 = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (true0) {
      box.innerText = "0";
      true0 = false;
    } else {
      box.innerText = "X";
      true0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const boxdisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const resetgame = () => {
  turn0 = true;
  boxenable();
  msgcont.classList.add("hide");
};
const boxenable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msgdisplay.innerText = `Winner is ${winner}`;
  msgcont.classList.remove("hide");
  boxdisable();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showWinner(p1);
      }
    }
  }
};

resetBtn.addEventListener("click", resetgame);


