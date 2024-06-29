confirm("In this game you have to select the number from the bubble as shown in Hit in the given time  and it will increase your points by 10 the more accurate you select the more points to get.... so bset of luck hope u will like it..... ");



let score = 0;
let time = 30;
let randomNumber;

const getRandom = () => {
  randomNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitNumber").textContent = randomNumber;
};

const makeBubble = () => {
  let clutter = "";
  for (let index = 0; index < 112; index++) {
    let rNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="elems h-12 w-12 cursor-pointer bg-green-700 text-white flex items-center justify-center font-bold rounded-full text-xl hover:bg-green-900">${rNumber}</div>`;
  }
  document.querySelector("#bubbleContainer").innerHTML = clutter;
};

const increaseScore = () => {
  score += 10;
  document.querySelector("#score").textContent = score;
};

const timer = () => {
  let timeInt = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timer").textContent = time;
    } else {
      clearInterval(timeInt);
      document.querySelector("#bubbleContainer").innerHTML = `<h2 class="text-4xl font-bold">Your Score : ${score}</h2>`;
    }
  }, 1000);
};

document.querySelector("#bubbleContainer").addEventListener("click", (e) => {
  let raNumber = Number(e.target.textContent);
  if (raNumber === randomNumber) {
    increaseScore();
    makeBubble();
    getRandom();
 }
else {
  time = 0;
    document.querySelector("#bubbleContainer").innerHTML = `<h2 class="text-4xl font-bold">Your Score : ${score}</h2>`;
  }
});

getRandom();
makeBubble();
timer();
