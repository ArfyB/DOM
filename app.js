// let paragraphElement = document.body.firstElementChild;
let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
}

//  click시에 function(함수)가 실행된다.
//  function()라고 작성시에는 코드분석후에 자동으로 실행되기 때문에 클릭시에만 적용되도록 ()를 작성하지 않는다.
paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    // let enteredText = inputElement.value;
    let enteredText = event.target.value;

    // let enteredText = event.data; => input에 입력된 모든 텍스트가 아닌 그때그때 입력된 한개의 글자만 출력됨.
}

inputElement.addEventListener('input', retrieveUserInput);