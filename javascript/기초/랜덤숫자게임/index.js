const form = document.querySelector("#input-form");
const range = document.querySelector(".range-input input");
const guess = document.querySelector(".guess-input input");
const chosen = document.querySelector(".chosen");
const result = document.querySelector(".result");

function printResult(guess, random) {
  chosen.innerText = `You choce: ${guess}, the machine choce: ${random}`;
  if (guess === random) {
    result.innerText = "YOU WON!!!!!!!!";
    result.classList.add('win');
    result.classList.remove('lose');
  } else {
    result.innerText = "YOU LOST...";
    result.classList.add('lose');
    result.classList.remove('win');
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const rangeValue = Number(range.value);
  const guessValue = Number(guess.value);

  const rangeRandom = Math.round(Math.random() * rangeValue);

  if (rangeValue >= 0) {
    if (guessValue <= rangeValue && guessValue >= 0) {
      printResult(guessValue, rangeRandom);
    } else {
      alert(
        "예상 숫자는 0 이상이거나 전체 범위의 숫자보다 작거나 같아야 합니다."
      );
    }
  }
}

form.addEventListener("submit", handleSubmit);
