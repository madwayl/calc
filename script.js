
let bracket = false,
    equalized = false,
    br = 0, 
    result = null,
    previousResult = null

let oldTime,
    newTime;

const entryScreen = document.querySelector('div[data-section="entry"]');
entryScreen.textContent = "";

const resultScreen = document.querySelector('div[data-section="result"]');
resultScreen.textContent = "";


// SECTION: Calculator Operation
// FIXME:
// 1. Empty Values are allowed with .includes and considered true
//      ✅ - Added another boolean statement to avoid the same
// 2. Issues with % symbols
//      ✅ - Created a separate while loop for checking %
// 3. Issues with unfinished brackets
//      ✅ - Check exact entry and add end bracket
// 4. Issues with brackets based multiplication
//      ✅ - Made flow to add multiplication after bracket calculation
// 5. Entering more than 1 symbol not encountering error
//      ✅ - Entered Statement to disallow more than 1 operator together
//      a. Reversing from the Error
//              ✅ - use Previous Value

function operate(entry) {

    let first, last, val
    let firstIsNumber, lastIsNumber
    
    entry = entry.replaceAll('x','*')
    
    while (entry.indexOf('%') != -1) {
        entry = '0123456789'.includes(entry.charAt(entry.indexOf('%')+1)) && 
                entry.charAt(entry.indexOf('%')+1) != '' ?
                    entry.replace('%', '/100*') :
                    entry.replace('%', '/100')
    }

    
    try {   
        check: while (first !== -1) {
            
            first = entry.lastIndexOf('(')
            last = entry.indexOf(')')
            
            if (first !== -1 && last === -1) {
                entry += ')'; 
                last = entry.indexOf(')');
            }
            
            val = Function('return ' + entry.slice(first, last+1))();
            
            firstIsNumber = '0123456789'.includes(entry.charAt(first-1)) && entry.charAt(first-1) !== '';
            lastIsNumber = '0123456789'.includes(entry.charAt(last+1)) && entry.charAt(last+1) !== '';

            if (first === -1) break check;
            
            if (first !== -1) {
                if (firstIsNumber && lastIsNumber) {
                    entry = entry.slice(0, first)  + `*${val}*` + entry.slice(last+1);
                    // entry.replaceAll('**','*');
                } else if (lastIsNumber) {
                    entry = entry.slice(0, first)  + `${val}*` + entry.slice(last+1);
                    // entry.replaceAll('**','*');
                } else if (firstIsNumber) {
                    entry = entry.slice(0, first)  + `*${val}` + entry.slice(last+1);
                    // entry.replaceAll('**','*');
                } else {
                    entry = entry.slice(0, first)  + `${val}` + entry.slice(last+1);
                }
            }
        }

        result = Function('return ' + entry)();

    } catch (e) {
        resultScreen.classList.add('error')
        return 'Error'
    }
    
    // if ('x/%'.includes(result)) resultScreen.classList.add('error')
    // else resultScreen.classList.remvoe('error')

    // FIXME: Max number of value to be seen
    return result % 1 === 0 ? Number.parseInt(result) :
                    result.toString().split('.')[1].length > 10 ?
                                    result.toExponential(6) :
                                    result
}
// !SECTION


// SECTION: Event Actions 
function eventAction(eventValue) {

    if (eventValue === "C") {
        entryScreen.textContent = "";
        resultScreen.textContent = "";
        bracket = false;
        resultScreen.classList.remove('error')
    }

    else if (eventValue === "=") {
        entryScreen.textContent = resultScreen.textContent;
        resultScreen.textContent = "";
        bracket = false;
    }

    else if (eventValue === "B") {
        if (newTime - oldTime > 1000) {
            entryScreen.textContent = "";
            console.log(newTime - oldTime)
        } else {
            resultScreen.classList.remove('error')
            entryScreen.textContent = entryScreen.textContent.slice(0,-1);
            resultScreen.textContent = previousResult
        }
    }

    else if (eventValue === "()") {
        let islastValueNumber = '0123456789'.includes(entryScreen.textContent.slice(-1));
        
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

        if (br == 0 && entryScreen.textContent.slice(-1) == ')') {
            resultScreen.textContent = operate(entryScreen.textContent)
        }
    }
}
// !SECTION

const Buttons = document.querySelectorAll('input');

for (let button of Buttons) {
    // SECTION: Mouse Press
    button.addEventListener('click',(e) => {
        
        if (e.target.value === "C") {
            // entryScreen.textContent = "";
            // resultScreen.textContent = "";
            // bracket = false;
            // resultScreen.classList.remove('error')
            eventAction('C')
        }

        else if (e.target.value === "=") {
            // entryScreen.textContent = resultScreen.textContent;
            // resultScreen.textContent = "";
            // bracket = false;
            eventAction('=')
        }

        else if (e.target.value === "B") {
            // if (newTime - oldTime > 1000) {
            //     entryScreen.textContent = "";
            //     console.log(newTime - oldTime)
            // } else {
            //     resultScreen.classList.remove('error')
            //     entryScreen.textContent = entryScreen.textContent.slice(0,-1);
            //     // resultScreen.textContent = operate(entryScreen.textContent)
            //     resultScreen.textContent = previousResult
            // }
            eventAction('B')
        }

        else if (e.target.value === "()") {
            // let islastValueNumber = '0123456789'.includes(entryScreen.textContent.slice(-1));
            
            // if (!bracket && !islastValueNumber && br == 0) {
            //     entryScreen.textContent += "(";
            //     br++;
            //     bracket = true;
            // } else if (bracket && islastValueNumber) {
            //     entryScreen.textContent += ")";
            //     br--;
            //     bracket = false;
            // } else if (bracket && !islastValueNumber) {
            //     entryScreen.textContent += "(";
            //     br++;
            //     if (br == 0) bracket = false;
            //     else bracket = true;
            // }  else if (!bracket && islastValueNumber){
            //     entryScreen.textContent += "(";
            //     br++;
            //     bracket = true;
            // } else {
            //     entryScreen.textContent += ")";
            //     br--;
            //     bracket = false;
            // }

            // if (br == 0 && entryScreen.textContent.slice(-1) == ')') {
            //     resultScreen.textContent = operate(entryScreen.textContent)
            // }
            eventAction('()')
        }
        
        else {
            if ("+-x/".includes(entryScreen.textContent.slice(-1))) resultScreen.textContent = 'Error'
            entryScreen.textContent += e.target.value;
        }

        if (!"+-x/(".includes(entryScreen.textContent.slice(-1)) && e.target.value !== "=") {
            resultScreen.textContent = operate(entryScreen.textContent)
        }

        if (resultScreen.textContent !== 'Error')
            previousResult = resultScreen.textContent
    });

    document.addEventListener('keydown', (e) => {
        console.log(e.key, e.code)

        if (e.key === "Delete") {
            eventAction('C')
        }

        else if (e.key === "=") {
            entryScreen.textContent = resultScreen.textContent;
            resultScreen.textContent = "";
            bracket = false;
        }
    });

}

// SECTION: Check on Long Press of Backspace
let backspace = document.querySelector('input[value="B"]');
backspace.addEventListener('mousedown', () =>  {
    oldTime = new Date
});
backspace.addEventListener('mouseup', () =>  {
    newTime = new Date
});
// !SECTION