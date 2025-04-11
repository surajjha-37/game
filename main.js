let tyre = document.querySelector(".tyre");
let tyre2 = document.querySelector(".tyre2");
let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");

function start() {
  document.body.classList.add("animate-bg");
  tyre.classList.add("tyre-1");
  tyre2.classList.add("tyre-1");
  audio.play();
}
function stop() {
  document.body.classList.remove("animate-bg");
  tyre.classList.remove("tyre-1");
  tyre2.classList.remove("tyre-1");
  audio.pause(); // Audio ko stop karne ke liye
  audio.currentTime = 0;
}

function stopCounting() {}
btn2.addEventListener("click", () => {
  stop();
  stopCounting();
});

let count = 0;
let intervalId;

function startCounting() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      count++;
      document.getElementById("counter").innerHTML = "score:" + count + " Km";
    }, 1000); // har 1 second me count badhega
  }
  return;
}

function stopCounting() {
  document.getElementById("counter").innerHTML = "score:" + "0" + " Km";
}

btn1.addEventListener("click", () => {
  start();
  startCounting();
});
