
let bracket = false, br = 0

const entryScreen = document.querySelector('div[data-section="entry"]');
entryScreen.textContent = "";

const resultScreen = document.querySelector('div[data-section="result"]');
resultScreen.textContent = "";

function operate(entry) {

    return -1
}

const Buttons = document.querySelectorAll('input');

for (let button of Buttons) {
    button.addEventListener('click',(e) => {
        
        let textLength = entryScreen.textContent.length;

        if (e.target.value === "CE") {
            entryScreen.textContent = "";
            bracket = false;
        }
        else if (e.target.value === "=") {
            entryScreen.textContent = "";
            bracket = false;
            resultScreen.textContent = operate(entryScreen.textContent)
        }

        else if (e.target.value === "()") {
            let islastValueNumber = '0123456789'.includes(entryScreen.textContent[textLength-1]);
            
            
            if (!bracket && !islastValueNumber && br == 0) {
                entryScreen.textContent += "(";
                br++;
                bracket = true;
            } else if (bracket && islastValueNumber) {
                entryScreen.textContent += ")";
                br--;
                bracket = false;
            } else if (bracket && !islastValueNumber) {
                entryScreen.textContent += "(";
                br++;
                if (br == 0) bracket = false;
                else bracket = true;
            }  else if (!bracket && islastValueNumber){
                entryScreen.textContent += "(";
                br++;
                bracket = true;
            } else {
                entryScreen.textContent += ")";
                br--;
                bracket = false;
            }
        }

        else entryScreen.textContent += e.target.value

        // if (!entryScreen.textContent[textLength - 1].includes("+","-","x","/")) {
        //     resultScreen.textContent = operate(entryScreen.textContent)
        // }
    })
}