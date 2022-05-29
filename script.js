
let bf = 0, bl = 0, // Brackets Front + Brackets Last
    result = null  // Result of the entry value

let oldTime, newTime; // Calculate Time for Long Press on Backspace
    

const entryScreen = document.querySelector('div[data-section="entry"]');
entryScreen.textContent = "";

const resultScreen = document.querySelector('div[data-section="result"]');
resultScreen.textContent = "";

// SECTION Calculator Operations

/* FIXME 🟢
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
    6. Fix Exponentials with Small Decimals
        ✅ - Check Length of repeating value
    7. Issue with -(-3) Operate Calculation
        ✅ - Fixed with Check on -1 and +1 with calculation and make calculation
    8. Fix Bugs on : 3-(-3)+(3-(-3) | 3-(-3)4 | 3 + (+3)4
        ✅ - Fixed with changes on final result string calculation
*/

function operate(entry) {

    let beforeIndex, afterIndex, val
    let beforeIsNumber, afterIsNumber
    
    entry = entry.replaceAll('x','*')

    entry = entry.replaceAll(' ', '')
    
    while (entry.indexOf('%') != -1) {
        entry = '0123456789'.includes(entry.charAt(entry.indexOf('%')+1)) && 
                entry.charAt(entry.indexOf('%')+1) != '' ?
                    entry.replace('%', '/100*') :
                    entry.replace('%', '/100')
    }

    
    try {   
        check: while (beforeIndex !== -1) {
            
            beforeIndex = entry.lastIndexOf('(')
            afterIndex = entry.indexOf(')', beforeIndex)

            
            if (beforeIndex !== -1 && afterIndex === -1) {
                entry += ')'; 
                afterIndex = entry.indexOf(')', beforeIndex);
            }

            // REVIEW
            // - ✅ Learning `Function()' to use instead of eval()
            
            val = Function('return ' + entry.slice(beforeIndex, afterIndex+1))();
            
            beforeIsNumber = '0123456789'.includes(entry.charAt(beforeIndex-1)) && entry.charAt(beforeIndex-1) !== '';
            afterIsNumber = '0123456789'.includes(entry.charAt(afterIndex+1)) && entry.charAt(afterIndex+1) !== '';

            beforeChar = entry.charAt(beforeIndex-1)

            if (beforeIndex === -1) break check;
            
            if (beforeIndex !== -1) {
                if (beforeIsNumber && afterIsNumber) {
                    entry = entry.slice(0, beforeIndex)  + `*${val}*` + entry.slice(afterIndex+1);
                } else if (afterIsNumber) {
                    if(val < 0) {
                        if (beforeChar == '-')
                            entry = entry.slice(0, beforeIndex - 1)  + `+${-1 * val}*` + entry.slice(afterIndex+1);
                        else if (beforeChar == '+')
                            entry = entry.slice(0, beforeIndex - 1)  + `${val}*` + entry.slice(afterIndex+1);
                        else
                            entry = entry.slice(0, beforeIndex)  + `${val}*` + entry.slice(afterIndex+1);
                    } else
                        entry = entry.slice(0, beforeIndex)  + `${val}*` + entry.slice(afterIndex+1);
                } else if (beforeIsNumber) {
                    entry = entry.slice(0, beforeIndex)  + `*${val}` + entry.slice(afterIndex+1);
                } else {
                    if (beforeChar == '-') {
                        if (!beforeIsNumber && val < 0) {
                            if (afterIsNumber) {
                                entry = entry.slice(0, beforeIndex - 1)  + `+${-1 * val}*` + entry.slice(afterIndex+1);
                            } else {
                                entry = entry.slice(0, beforeIndex - 1)  + `+${-1 * val}` + entry.slice(afterIndex+1);
                            }
                        } else {
                            entry = entry.slice(0, beforeIndex)  + `${val}` + entry.slice(afterIndex+1);
                        }
                    } else {
                        entry = entry.slice(0, beforeIndex)  + `${val}` + entry.slice(afterIndex+1);
                    }
                }
            }
        }

        result = Function('return ' + entry)();

        /* FIXME 🟢
            1. Max number of values only to be seen (Encounter by Font Size)
                ✅ - Fixed the Max Encounter to 10 Digits Length
            2. Issues with Larger Integer Values
                ✅ - Calculate Safe Integer avoid Number values
            3. Short Decimals to Exponential
                ✅ - Check for repeated decimal values
        */

        // Check if a Decimal Number or Whole Number
        if (result % 1 === 0)
            // Check if SafeInteger
            if (result.toString().length > 10) {
                result = Number.parseInt(result)
                result = result.toExponential(4)
            }
            else
                result = result
        // If Decimal
        else 
            if (result.toString().length > 4) {
                
                // Check if repeating Decimal
                decimal = result.toString().split('.')[1]
                count = decimal.split(`${decimal.slice(-3, -2)}`).length - 1
                
                if (count > 5)
                    result = result.toFixed(2)
                else
                    result = result.toExponential(4)
            }
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
        ✅ - Corrected with converting Exponents to Number
    4. Issues with Text Wrap
        ✅ - Solved with placing breaking space
        ✅ - Modified breaking space to none on calculation
    5. Issues with Backspace with Space Character
        ✅ - Matched with Regex to remove two spaces on the operator entry
    6. Do not enter space on operators + and - , if before is no numbers
        Allow Space : 123% - 123
        Disallow Space : 123/-123 | 123*-123 | 123(-12 + | +123
            ✅ - Ignore Spacing when LastChar is '/*(' and ''
    7. Show error on - 1(x 
        ✅ - Separate Check for Bracket & '+/' added
    8. Not joining Mouse and Keyboard Click for Brackets
        ✅ - Remove separate keyboard based bracket calculation
                and integrate with Mouse based bracket calculation
*/

function eventAction(eventValue) {

    let LastChar;

    // On Clear
    if (eventValue === "C") {
        entryScreen.textContent = "";
        resultScreen.textContent = "";
        bl = 0; bf = 0;
    }

    // On Equals
    else if (eventValue === "=") {
        
        if (resultScreen.textContent.includes('e+'))
            entryScreen.textContent = Number(resultScreen.textContent).toString()
        else if (resultScreen.textContent.includes('e-'))
            entryScreen.textContent = Number(resultScreen.textContent).toFixed(resultScreen.textContent.length - 3).toString()
        else
            entryScreen.textContent = resultScreen.textContent;
        
        resultScreen.textContent = "";
        bl = 0; bf = 0;
        
        // Do not acknowledge Error after Equal
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
            if (entryScreen.textContent.replaceAll(' ', '').slice(-1) == ')') bl--
            else if (entryScreen.textContent.replaceAll(' ', '').slice(-1) == '(') bf--

            if (entryScreen.textContent.slice(-3).match(/\s[+-x/]\s/g))
                entryScreen.textContent = entryScreen.textContent.slice(0, -3);
            else
                entryScreen.textContent = entryScreen.textContent.slice(0, -1);
            
            let before = entryScreen.textContent.replaceAll(' ', '').slice(-2, -1)
            
            // Find Error Still exists on Backspace and return corrected value
            if('+-x/'.includes(before)) {
                // if (entryScreen.textContent == '')
                    resultScreen.textContent = ""
                // else {
                //     resultScreen.textContent = "ERROR"
                // }
            }
            // Operate on corrected value
            else if (!'+-x/'.includes(before))
                if (entryScreen.textContent.slice(-3).match(/\s[+-x/]\s/g))
                    resultScreen.textContent = operate(entryScreen.textContent.slice(0, -3))
                else
                    resultScreen.textContent = operate(entryScreen.textContent.slice(0, -1))
            else
                return
        }
    }

    // On Brackets by Mouse Click
    
    /* FIXME 🟢
    Fixing the Bracket errors (incorrect Bracket Sequence) showing up
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
    else if (eventValue === '(') {
        bf++;
        entryScreen.textContent += eventValue;
    }

    else if (eventValue === ')') {
        bl++;
        entryScreen.textContent += eventValue;

        if (!(bf >= bl)) return 'ERROR';
    }   
    
    // On Other Entries
    else {
        LastChar = entryScreen.textContent.replaceAll(' ', '').slice(-1);

        const al_pm = '+-'.includes(eventValue) && 'x/('.includes(LastChar) //Allow '+ or -' for characters 'x/('

        // Add space only when last char is not 'x/('

        if ('+-x/'.includes(eventValue) && !al_pm)
            entryScreen.textContent += ' ' + eventValue + ' ';
        else
            entryScreen.textContent += eventValue;

        // Recheck on Last Character
        LastChar = entryScreen.textContent.replaceAll(' ', '').slice(-1);
        
        const beforeLastChar = entryScreen.textContent.replaceAll(' ', '').slice(-2, -1);
        // const br_md = beforeLastChar == '(' && 'x/'.includes(LastChar); //Multiply and Division not Allowed after Bracket
        
        // Return Error on double operator entry
        if (("+-x/(".includes(beforeLastChar) && "+-x/".includes(LastChar) && beforeLastChar != '' && LastChar != '') && !al_pm) {
            resultScreen.textContent = 'ERROR';
        } 
    }

    // Allow to operate only if no symbols are typed
    if (!"+-x/(".includes(entryScreen.textContent.replaceAll(' ', '').slice(-1)) && eventValue !== "=") {
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

/* FIXME 🟢
1. Hover action on KeyDown
✅ - Added Switch with Data Attributes
2. Long Press Toggles ClassList Wrong
✅ - Check using Ternary Operator for Keyup or Keydown
*/
function hoverOnKeyPress(eventKey, eventType) {

    const btnActive = document.querySelector(`input[data-value~="${eventKey}"`);

    const isKeyDown = eventType == "keydown";
    
    switch (eventKey) {
        case 'b':
        case 'Backspace':
            isKeyDown ? btnActive.classList.add('backspace-active') : btnActive.classList.remove('backspace-active')

        case 'c':
        case 'Delete':
            isKeyDown ? btnActive.classList.add('delete-active') : btnActive.classList.remove('delete-active')
        
        case '=': case 'Enter':
        case '*': case 'x': case '/':
        case '%': case '(': case ')':
        case '-': case '+':
            isKeyDown ? btnActive.classList.add('symbols-active') : btnActive.classList.remove('symbols-active')


        case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8':
        case '9': case '0': case '.':
            isKeyDown ? btnActive.classList.add('number-active') : btnActive.classList.remove('number-active')
            
    }

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

    // Hover on Key
    hoverOnKeyPress(e.key, e.type)

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

document.addEventListener('keyup', (e) => {
    
    hoverOnKeyPress(e.key, e.type)
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