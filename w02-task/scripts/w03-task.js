/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {   /* declaración de función */

  return number1 + number2;
}

function addNumbers() {
  let addnumber1 = Number(document.querySelector("#add1").value);
  let addnumber2 = Number(document.querySelector("#add2").value);

  return (document.querySelector("#sum").value = add(addnumber1, addnumber2));
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {

  return number1 - number2;
}

function subtractNumbers() {
  let subtractnumber1 = Number(document.querySelector("#subtract1").value);
  let subtractnumber2 = Number(document.querySelector("#subtract2").value);

  return (document.querySelector("#difference").value = subtract(subtractnumber1,subtractnumber2));
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;

let multiplyNumbers = () => {
  let factor1 = Number(document.querySelector("#factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);

  return document.querySelector("#product").value = multiply(factor1, factor2);

}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {

    return number1 / number2;
  }
  
  function divideNumbers() {
    let dividenumber1 = Number(document.querySelector("#dividend").value);
    let dividenumber2 = Number(document.querySelector("#divisor").value);
  
    return (document.querySelector("#quotient").value = divide(dividenumber1,dividenumber2));
  }
  
  document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal() {

  let subtotal = Number(document.querySelector("#subtotal").value);

    
    let applyDiscount = document.querySelector('#member').checked;

    // Apply  discount if the membership  is checked
  let discountFactor = applyDiscount ? 0.2 : 0;
 let discountedSubtotal = subtotal - (subtotal * discountFactor);

    // Output the total with two decimals
 let total = discountedSubtotal.toFixed(2);
    document.querySelector('#total').textContent = total;
}

document.querySelector("#getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
let oddNumbers=numbersArray.filter(function(number){
    return number % 2 !== 0;
});
document.querySelector("#odds").innerHTML=numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
let evenNumbers=numbersArray.filter(function(number){
    return number % 2 === 0;
});
document.querySelector("#evens").innerHTML=numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let sumArrayNumbers=numbersArray.reduce(function(sum,number){
    return sum+number;
});
document.querySelector("#sumOfArray").innerHTML=numbersArray.reduce((sum,number) => sum +number );

/* Output Multiplied by 2 Array */
let multiplyArrayNumbers=numbersArray.map(function(number){
    return number => number *2;
});
document.querySelector("#multiplied").innerHTML=numbersArray.map(number=> number *2 );

/* Output Sum of Multiplied by 2 Array */

let multipliedArray = numbersArray.map(function(number) {
    return number * 2;
});

// Use the reduce() method to sum the multiplied elements
let sumMultiplied = multipliedArray.reduce(function(acc, currentValue) {
    return acc + currentValue;
}, 0); 


document.querySelector('#sumOfMultiplied').innerHTML = 'Sum of Multiplied Elements: ' + sumMultiplied;