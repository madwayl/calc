
let bracket = false,
    equalized = false,
    br = 0, 
    result = null,
    previousResult = null

const entryScreen = document.querySelector('div[data-section="entry"]');
entryScreen.textContent = "";

const resultScreen = document.querySelector('div[data-section="result"]');
resultScreen.textContent = "";

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

const Buttons = document.querySelectorAll('input');

for (let button of Buttons) {
    button.addEventListener('click',(e) => {
        
        if (e.target.value === "C") {
            entryScreen.textContent = "";
            resultScreen.textContent = "";
            bracket = false;
            resultScreen.classList.remove('error')
        }

        else if (e.target.value === "=") {
            entryScreen.textContent = resultScreen.textContent;
            resultScreen.textContent = "";
            bracket = false;
        }

        else if (e.target.value === "B") {
            resultScreen.classList.remove('error')
            entryScreen.textContent = entryScreen.textContent.slice(0,-1);
            // resultScreen.textContent = operate(entryScreen.textContent)
            resultScreen.textContent = previousResult
        }

        else if (e.target.value === "()") {
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
        
        else {
            if ("+-x/".includes(entryScreen.textContent.slice(-1))) resultScreen.textContent = 'Error'
            entryScreen.textContent += e.target.value;
        }

        if (!"+-x/".includes(entryScreen.textContent.slice(-1)) && e.target.value !== "=") {
            resultScreen.textContent = operate(entryScreen.textContent)
        }

        if (resultScreen.textContent !== 'Error')
            previousResult = resultScreen.textContent
    })
}