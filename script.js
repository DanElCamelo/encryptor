const inputTextArea = document.querySelector('.textarea--input');
const outputTextArea = document.querySelector('.textarea--output');

const outputDescription = document.querySelector('.block__description--output');
const textOutput = document.querySelector('.block__text--output');
const textOutputMessage = document.querySelector('.block__text--output-message');


inputTextArea.focus();


function isEncrypted() {

    const encryptedText = encrypt(inputTextArea.value);
    outputTextArea.value = encryptedText;
    inputTextArea.value = "";
    outputTextArea.style.backgroundImage = "none";

    substitute();

}


function substitute() {

    document.querySelector('.copy').style.display = 'block';

    const successfulMessage = document.createElement('p');
    successfulMessage.innerHTML = 'Successfully Encrypted/Decrypted';
    successfulMessage.setAttribute('class', 'block__text--output');
    outputDescription.replaceChild(successfulMessage, textOutput);

    const adviceMessage = document.createElement('p');
    adviceMessage.innerHTML = 'If you wish to decrypt this message, copy it by clicking the button bellow.';
    adviceMessage.setAttribute('class', 'block__text--output-message');
    outputDescription.replaceChild(adviceMessage, textOutputMessage);

}


function isDecrypted() {

    const decryptedText = decrypt(inputTextArea.value);
    outputTextArea.value = decryptedText;
    inputTextArea.value = "";
    
}

function encrypt(input) {

    let enigmaCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    input = input.toLowerCase();

    for(let i = 0; i < enigmaCode.length; i++){

        if(input.includes(enigmaCode[i][0])) {
            input = input.replaceAll(enigmaCode[i][0], enigmaCode[i][1]);
        }

    }

    return input;
    
}

function decrypt(input) {

    let enigmaCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    input = input.toLowerCase();

    for(let i = 0; i < enigmaCode.length; i++){

        if(input.includes(enigmaCode[i][1])) {
            input = input.replaceAll(enigmaCode[i][1], enigmaCode[i][0]);
        }

    }

    return input;

}

function copy() {

    const text = outputTextArea.value;
    navigator.clipboard.writeText(text);
    outputTextArea.value = "";

}

