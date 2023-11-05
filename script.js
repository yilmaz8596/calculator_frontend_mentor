const operate = (num1, num2, sign) => {
  if (num2 === 0 && sign === "/") {
    window.alert("Can not divide by 0");
  }
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "x") {
    return num1 * num2;
  } else if (sign === "/") {
    return num1 / num2;
  }
};

let firstVal = "";
let secondVal = "";
let result = "";
let sign = "";
let clickCount = 0;
let clicked = false;
let opArray = [];
const buttons = document.querySelectorAll(
  ".button-group--one button, .button-group--two button, .button-group--three button, .button-group--four button,.button-group--five button"
);

let middleContainerDisplay = document.querySelector(
  ".middle-container--display"
);

middleContainerDisplay.textContent = 0;

const equalButton = document.querySelector(".equal");
const delButton = document.querySelector(".del");
const decimalButton = document.querySelector(".decimal");
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", function () {
  location.reload();
});

equalButton.addEventListener("click", function () {
  if (firstVal !== "" && secondVal !== "") {
    result = operate(Number(firstVal), Number(secondVal), sign);
    result = Number(result) % 1 === 0 ? result : Number(result).toFixed(1);
    middleContainerText.textContent = result;
    firstVal = "";
    secondVal = "";
    sign = "";
    firstVal = result;
    clicked = false;
  } else {
    return;
  }
  // if (result) {
  //   result = result % 1 === 0 ? result : Number(result).toFixed(1);
  //   middleContainerDisplay.textContent = result;
  //   clicked = false;
  // }
  // firstVal = "";
  // secondVal = "";
  // result = "";

  // clickCount -= 1;
  // clicked = false;
  // if (result) {
  //   firstVal = result;
  // }
});

delButton.addEventListener("click", function () {
  if (
    middleContainerDisplay.textContent.length === 1 ||
    middleContainerDisplay.textContent === "0"
  ) {
    middleContainerDisplay.textContent = "0";
    firstVal = "";
    secondVal = "";
    result = "";
  } else {
    middleContainerDisplay.textContent =
      middleContainerDisplay.textContent.slice(
        0,
        middleContainerDisplay.textContent.length - 1
      );
    firstVal = middleContainerDisplay.textContent;
    result = middleContainerDisplay.textContent;
  }

  // firstVal = "";
  // secondVal = "";
  // result = "";
});

decimalButton.addEventListener("click", function () {});

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (
      e.target.value === "+" ||
      e.target.value === "-" ||
      e.target.value === "x" ||
      e.target.value === "/"
    ) {
      clicked = true;
      sign = e.target.value;
      opArray.push(sign);
      if (firstVal !== "" && secondVal !== "") {
        sign = e.target.value;
        result = operate(
          Number(firstVal),
          Number(secondVal),
          opArray[opArray.length - 2]
        );
        result =
          Number(result) % 1 === 0 ? Number(result) : Number(result).toFixed(1);
        middleContainerText.textContent = result;
        firstVal = "";
        secondVal = "";
        firstVal = result;
      } else {
        return;
      }
    }

    if (
      // clickCount % 2 === 0 &&
      !clicked &&
      (e.target.value === "0" ||
        e.target.value === "1" ||
        e.target.value === "2" ||
        e.target.value === "3" ||
        e.target.value === "4" ||
        e.target.value === "5" ||
        e.target.value === "6" ||
        e.target.value === "7" ||
        e.target.value === "8" ||
        e.target.value === "9" ||
        e.target.value === ".")
    ) {
      firstVal += e.target.value;
      middleContainerDisplay.textContent = firstVal;

      console.log(firstVal);
    } else if (
      // clickCount % 2 !== 0 &&
      clicked &&
      (e.target.value === "0" ||
        e.target.value === "1" ||
        e.target.value === "2" ||
        e.target.value === "3" ||
        e.target.value === "4" ||
        e.target.value === "5" ||
        e.target.value === "6" ||
        e.target.value === "7" ||
        e.target.value === "8" ||
        e.target.value === "9" ||
        e.target.value === ".")
    ) {
      secondVal += e.target.value;
      middleContainerDisplay.textContent = "";
      middleContainerDisplay.textContent = secondVal;
      console.log(secondVal);
    }
  });
});

const slider = document.querySelector(".theme-slider--original");
const container = document.querySelector(".theme-slider--container");
const middleContainer = document.querySelector(".middle-container");
const middleContainerText = document.querySelector(
  ".middle-container--display"
);
const bottomContainer = document.querySelector(".bottom-container");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const textOne = document.querySelector(".text-one");
const textTwo = document.querySelector(".text-two");
const numsText = document.querySelectorAll(
  ".slider-nums--one, .slider-nums--two, .slider-nums--three"
);
const levels = [
  {
    color: "#445069",
    sliderColor: "#f6635c",
    displayColor: "#161d2e",
    textColor: "white",
    calcColor: "#1d273e",
    delResetColor: "#94add7",
    buttonColor: "#ddd1d1",
    displayTextColor: "#445069",
    range: [0, 33.33],
  },
  {
    color: "#EEEEEE",
    sliderColor: "#F58634",
    displayColor: "#FAFAFA",
    textColor: "black",
    calcColor: "#B9AC92",
    delResetColor: "#00AFC1",
    buttonColor: "#E6E6E6",
    displayTextColor: "#494545",
    range: [33.34, 66.66],
  },
  {
    color: "#110133",
    displayColor: "#202040",
    sliderColor: "#C2FFF9",
    textColor: "#FACD49",
    calcColor: "#202040",
    delResetColor: "#E15FED",
    buttonColor: "#E11D74",
    displayTextColor: "#FACD49",
    range: [66.67, 100],
  },
];

function changeBackgroundColor(position) {
  for (const level of levels) {
    if (position >= level.range[0] && position <= level.range[1]) {
      document.body.style.backgroundColor = level.color;
      middleContainer.style.backgroundColor = level.displayColor;
      middleContainerText.style.color = level.textColor;
      bottomContainer.style.backgroundColor = level.calcColor;
      slider.style.backgroundColor = level.sliderColor;
      container.style.backgroundColor = level.calcColor;
      buttons.forEach((b) => {
        b.style.backgroundColor = level.buttonColor;
        b.style.color = level.displayTextColor;
      });
      del.style.backgroundColor = level.delResetColor;
      reset.style.backgroundColor = level.delResetColor;
      equal.style.backgroundColor = level.sliderColor;
      textOne.style.color = level.textColor;
      textTwo.style.color = level.textColor;
      numsText.forEach((t) => {
        t.style.color = level.textColor;
      });
      return;
    }
  }
}

let isDragging = false;
let startPositionX = 0;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPositionX = e.clientX - slider.getBoundingClientRect().left;
  slider.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  let newPositionX =
    e.clientX - container.getBoundingClientRect().left - startPositionX;

  const maxLeftPosition = 8;
  const maxRightPosition = container.offsetWidth - slider.offsetWidth - 8;

  newPositionX = Math.min(
    maxRightPosition,
    Math.max(maxLeftPosition, newPositionX)
  );

  slider.style.left = newPositionX + "px";

  const positionPercentage = (newPositionX / maxRightPosition) * 100;

  changeBackgroundColor(positionPercentage);
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    slider.style.transition = "all cubic-bezier(0.075, 0.82, 0.165, 1)";
  }
});
