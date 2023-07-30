const productNameInputElement = document.getElementById("product-name");
const remaingCharsElement = document.getElementById("remaining-chars");

// console.dir(productNameInputElement);
const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  //   let remainingCharacters = 60 - enteredTextLength;
  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remaingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);