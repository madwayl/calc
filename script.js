
let bf = 0, bl = 0, // Brackets Front + Brackets Last
    result = null  // Result of the entry value

let oldTime, // Calculate Time for Long Press on Backspace
    newTime;

const entryScreen = document.querySelector('div[data-section="entry"]');
entryScreen.textContent = "";

const resultScreen = document.querySelector('div[data-section="result"]');
resultScreen.textContent = "";

// SECTION Calculator Operations

/* FIXME 🟠
1. Empty Values are allowed with .includes and considered true
✅ - Added another boolean statement to avoid the same
2. Issues with % symbols
✅ - Created a separate while loop for checking %
3. Issues with brackets based multiplication
✅ - Made flow to add multiplication after bracket calculation
4. Avoid eval()
✅ - Used Function()
5. Unhandled Error
✅ - Moved to try/catch block
6. Add Spaces in between the symbols
*/

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
            last = entry.indexOf(')', first)

            
            if (first !== -1 && last === -1) {
                entry += ')'; 
                last = entry.indexOf(')', first);
            }

            // REVIEW
            // - ✅ Learning `Function()' to use instead of eval()
            
            val = Function('return ' + entry.slice(first, last+1))();
            
            firstIsNumber = '0123456789'.includes(entry.charAt(first-1)) && entry.charAt(first-1) !== '';
            lastIsNumber = '0123456789'.includes(entry.charAt(last+1)) && entry.charAt(last+1) !== '';

            if (first === -1) break check;
            
            if (first !== -1) {
                if (firstIsNumber && lastIsNumber) {
                    entry = entry.slice(0, first)  + `*${val}*` + entry.slice(last+1);
                } else if (lastIsNumber) {
                    entry = entry.slice(0, first)  + `${val}*` + entry.slice(last+1);
                } else if (firstIsNumber) {
                    entry = entry.slice(0, first)  + `*${val}` + entry.slice(last+1);
                } else {
                    entry = entry.slice(0, first)  + `${val}` + entry.slice(last+1);
                }
            }
        }

        result = Function('return ' + entry)();

        /* FIXME 🟢
        1. Max number of values only to be seen (Encounter by Font Size)
        ✅ - Fixed the Max Encounter to 10 Digits Length
        2. Issues with Larger Integer Values
        ✅ - Calculate Safe Integer avoid Number values
        */

        // Check if a Decimal Value
        if (result % 1 === 0)
            // Check if SafeInteger
            if (result.toString().length > 10) {
                result = Number.parseInt(result)
                result = result.toExponential(4)
            }
            else
                result = result
        // Check if Decimal
        else 
            if (result.toString().split('.')[1].length > 5)
                result = result.toExponential(4)
            else
                result = result



    } catch (e) {
        return 'ERROR'
    }

    return result
}
// !SECTION


// SECTION Event Actions

/* FIXME 🟢
1. Entering more than 1 symbol not encountering error
✅ - Entered Statement to disallow more than 1 operator together
    a. Reversing from the Error
    ✅ - use Previous Value 
    b. Not Calculating the End Result After Error Removed
    ✅ - Check for Double operator entry / operate if not
2. Issues with unfinished brackets
✅ - Check exact entry and add end bracket
3. Issue on Equals after Exponents
*/

function eventAction(eventValue) {

    // On Clear
    if (eventValue === "C") {
        entryScreen.textContent = "";
        resultScreen.textContent = "";
        bracket = false;
        bl = 0; bf = 0;
    }

    // On Equals
    else if (eventValue === "=") {
        
        if (resultScreen.textContent.includes('e+'))
            entryScreen.textContent = Number(resultScreen.textContent).toString()
        else if (resultScreen.textContent.includes('e-'))
            entryScreen.textContent = (Number(resultScreen.textContent)).toFixed(resultScreen.textContent.length - 1).toString()
        else
            entryScreen.textContent = resultScreen.textContent;
        
        resultScreen.textContent = "";
        bl = 0; bf = 0;
        bracket = false;
        
        // Do not acknowledge Error on Equal
        if (resultScreen.textContent == "ERROR") entryScreen.textContent = ""

    }

    // On Backspace
    else if (eventValue === "B") {
        
        // Long Press Backspace
        if (newTime - oldTime > 1000) {
            entryScreen.textContent = "";
            bl = 0; bf = 0;
            // console.log(newTime - oldTime)
        } 
        // Short Press Backspace
        else {

            // Reduce Bracket Count after Backspace
            if (entryScreen.textContent.slice(-1) == ')') bl--
            else if (entryScreen.textContent.slice(-1) == '(') bf--

            entryScreen.textContent = entryScreen.textContent.slice(0,-1);
            
            // Find Error Still exists on Backspace and return corrected value
            if('+-x/'.includes(entryScreen.textContent.slice(-2,-1))) {
                if (entryScreen.textContent == '')
                    resultScreen.textContent = ""
                else {
                    resultScreen.textContent = "ERROR"
                }
            }
            else if (!'+-x/'.includes(entryScreen.textContent.slice(-2,-1)))
                resultScreen.textContent = operate(entryScreen.textContent.slice(0,-1))
            else
                return
        }
    }

    // On Brackets by Mouse Click
    
    /* FIXME 🟢
    Fixing the Bracket errors showing up
    - ((8)9) ✅
    - ((9)-(9)) ✅
    */
    
    else if (eventValue === "()") {
        let islastValueNumber = '0123456789'.includes(entryScreen.textContent.slice(-1));
        let islastValueBracket = ')' === entryScreen.textContent.slice(-1)

        if (bf - bl == 0) {
            entryScreen.textContent += "(";
            bf++
        } else if (bf > bl && (islastValueNumber || islastValueBracket)) {
            entryScreen.textContent += ")";
            bl++
        } else if (bf > bl && !islastValueNumber) {
            entryScreen.textContent += "(";
            bf++
        }
        
        if (bf - bl == 0 && entryScreen.textContent.slice(-1) == ')') {
            resultScreen.textContent = operate(entryScreen.textContent)
        }
    }

    // On Keyboard Specific Brackets
    else if (eventValue === '(' || eventValue === ')') {
        let kbf = entryScreen.textContent.split('(').length - 1
        let kbl = entryScreen.textContent.split(')').length - 1
        
        entryScreen.textContent += eventValue;
        
        if (!(kbf >= kbl)) {
            return 'ERROR'
        }
    }
    
    // On Other Entries
    else {
        entryScreen.textContent += eventValue;

        let beforeLastChar = entryScreen.textContent.slice(-2, -1)
        
        // Return Error on double operator entry
        if ("+-x/".includes(beforeLastChar) && beforeLastChar != '') {
            resultScreen.textContent = 'ERROR'
        } 
    }

    // Allow to operate only if no symbols are typed
    if (!"+-x/(".includes(entryScreen.textContent.slice(-1)) && eventValue !== "=") {
        resultScreen.textContent = operate(entryScreen.textContent)

    }

    // Always Scroll Entry to Left
    entryScreen.scrollLeft = entryScreen.scrollWidth - entryScreen.clientHeight
}
// !SECTION

// Check on Error & Enable Error Class
function checkError() {
    if (resultScreen.textContent == 'ERROR') resultScreen.classList.add('error')
    else resultScreen.classList.remove('error')
}

/* FIXME ⚪
1. Hover action on KeyDown
*/
function hoverOnKeyPress(eventKey) {

    const b = Array(document.querySelectorAll('input'))

        b.dataset.value
    
        switch (eventKey) {
            case 'b':
            case 'Backspace':
                .classList.add('backspace-active')

            case 'c':
            case 'Delete':
                .classList.add('delete-active')
            
            case '=':
            case 'Enter':
                .classList.add('symbols-active')

            case '*':
            case 'x':

            case '1': case '2': case '3': case '4':
            case '5': case '6': case '7': case '8':
            case '9': case '0': case '.':
                .classList.add('number-active')
                
        }

    });
}

const Buttons = document.querySelectorAll('input');

// SECTION Event Listeners 
// SECTION Mouse
for (let button of Buttons) {
    button.addEventListener('click',(e) => {
        eventAction(e.target.value);
        
        checkError()
    });
}
// !SECTION

// SECTION Keyboard 
document.addEventListener('keydown', (e) => {
    // console.log(e.key, e.code);

    // Ignored Keys
    if ('adefghijklmnopqrstuvwyz&^$#`~!@_{[]}:;"\'\\<,>?'.includes(e.key)) {
        // console.log('Key Ignored: ', e.key)
        return
    }

    // Acknowledged Keys
    if (e.key === "Delete" || e.key === "c") eventAction('C')
    else if (e.key === "=" || e.key === "Enter") eventAction('=')
    else if (e.key === "Backspace" || e.key === "b") eventAction('B')
    else if (e.key === "*" || e.key === "x") eventAction('x')
    else if ('1234567890-+=%()./'.includes(e.key)) {
        // console.log('Key Acknowledged: ', e.key)
        eventAction(e.key)
    } else {
        return
    }

    checkError()

});
// !SECTION
// !SECTION


// SECTION Long Press of Backspace
let backspace = document.querySelector('input[value="B"]');
backspace.addEventListener('mousedown', () =>  {
    oldTime = new Date
});
backspace.addEventListener('mouseup', () =>  {
    newTime = new Date
});
// !SECTION