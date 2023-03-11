const drums = document.querySelectorAll(".drum");

function playmp3(x) {
  let audio;
  switch (x) {
    case "w":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    // default:
    //   break;
  }
  audio.play();
}

drums.forEach(function (item) {
  item.addEventListener("click", function () {
    playmp3(item.classList[0]);
    hover(item);
  });
});

document.addEventListener("keypress", function (e) {
  playmp3(e.key);
  hover(document.querySelector(`.${e.key}`));
});

function hover(v) {
  v.classList.add("pressed");
  setInterval(() => {
    v.classList.remove("pressed");
  }, 200);
}
