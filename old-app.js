console.log(window);
console.log("hi");
// alert();
// window.alert();

// console.log(window.document);
// console.log(document);

// console.dir(document);

// document.body.children[1].children[0].href = "https://google.com";
//              <p>         <a>

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("#external-id");
// anchorElement.href = "https://academind.com";

// anchorElement = document.querySelector('a'); a { color: red; }
// anchorElement = document.querySelector('p a');
// anchorElement = document.querySelectorAll('p a');

// Add Element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);

// Remove Element

let firstH1Element = document.querySelector("h1");

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser


// Move Element

firstParagraph.parentElement.append(firstParagraph);


// innerHTML    // 텍스트를 포함하여 a태그 라던지 모두 가져옴

firstParagraph.innerHTML = 'Hi! This is <strong>important!<strong>';