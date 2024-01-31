/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = [];
    let ops = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => Math.trunc(a / b)
    };

    for(let token of tokens){
        if(Object.keys(ops).includes(token)){

            let b = stack.pop();
            let a = stack.pop();

            stack.push(ops[token](a,b));

        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
    
};
