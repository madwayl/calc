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

    let err = -1

    try {   
        check: while (first !== -1) {
            
            first = entry.lastIndexOf('(')
            last = entry.indexOf(')', first)

            // if (first > last) {
            //     break check
            // }
            
            if (first !== -1 && last === -1) {
                entry += ')'; 
                last = entry.indexOf(')', first);
            }
            
            val = Function('return ' + entry.slice(first, last+1))();
            let vale = entry.slice(first, last+1);
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
    
    // FIXME: Max number of value to be seen
    return result % 1 === 0 ? Number.parseInt(result) :
                    result.toString().split('.')[1].length > 10 ?
                                    result.toExponential(6) :
                                    result
}
// !SECTION