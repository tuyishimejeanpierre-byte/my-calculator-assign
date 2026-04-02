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
function pulseint(f, start, end, step=0.01){
    let sum = 0
    for(x = start; x < end; x += step){
        sum += f(x) * step;
       
    }
     return sum
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
    }else if(operation === "pulseint"){
        result = pulseint(x => x * x, a,b)
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
 console.log("pulseint", 2, 5)

 

 console.log(history)




 