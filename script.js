const history = []

function add(a, b) { 
    return a + b;
}
function subtract(a, b) { 
    return a - b;

}
function multiply(a, b) { 
    return a * b;

}
function divide(a, b) { 
    if(b === 0){
        return "cannot divide by zero"
    }
    return a / b;

}

function calculate(operation, a, b){
    let result;
    if(operation === "addition"){
  result = add(a, b);
    }else if(operation === "subtraction"){
        
        result = subtract(a,b);
    }else if(operation === "multiplication"){
        result = multiply(a,b);
    }else if(operation === "division"){
       result = divide(a,b);
    }else{
        return "invalid function"
    }

 history.push({
    operation: operation,
     operands: [a,b], 
     result: result})
     return result
 }
 console.log(calculate("addition", 6, 3))
 console.log(calculate("division", 9, 2))

 console.log(history)

