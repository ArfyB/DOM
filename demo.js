let productNameInputElement = document.getElementById("product-name");
let remaingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);
let maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  //   let remainingCharacters = 60 - enteredTextLength;
  let remainingCharacters = maxAllowedChars - enteredTextLength;
  remaingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
