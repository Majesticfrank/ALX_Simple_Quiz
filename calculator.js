// function Add(){
//     let num1 =parseFloat(document.getElementById('number1').value)||0;
//     let num2 =parseFloat(document.getElementById('number2').value)||0;

//     let result = num1+num2;
//     document.getElementById('calculation-result').innerHTML= result;

// }
// let add=document.getElementById('add');
// add.addEventListener('click' , Add);


// function Subtract(){
//     let num1 =parseFloat(document.getElementById('number1').value)||0;
//     let num2 =parseFloat(document.getElementById('number2').value)||0;

//     return  result = num1 - num2;
//     document.getElementById('calculation-result').innerHTML= result;

// }
// let subtract = document.getElementById('subtract');
// subtract.addEventListener('click' , Subtract);



//  function Multiplication(){

//     let num1 =parseFloat(document.getElementById('number1').value)||0;
//     let num2 =parseFloat(document.getElementById('number2').value)||0;

//     let result = num1 * num2;
//     document.getElementById('calculation-result').innerHTML= result;

//  }

//  let Multiply=document.getElementById('multiply');
//  Multiply.addEventListener('click', Multiplication);

//  function Division(){
//     let num1 =parseFloat(document.getElementById('number1').value)||0;
//     let num2 =parseFloat(document.getElementById('number2').value)||0;

//     let result = num1 / num2;
//     document.getElementById('calculation-result').innerHTML= result;

//  }
//     let division=document.getElementById('divide');
//     division.addEventListener('click', Division);




function add(num1, num2) {
    return num1 + num2;
}

document.getElementById('add').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('number1').value) || 0;
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = add(num1, num2);
    document.getElementById('calculation-result').innerHTML = result;
});


function subtract(num1, num2) {
    return num1 - num2;
}

document.getElementById('subtract').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('number1').value) || 0;
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = subtract(num1, num2);
    document.getElementById('calculation-result').innerHTML = result;
});

function multiply(num1, num2) {
    return num1 * num2;
}

document.getElementById('multiply').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('number1').value) || 0;
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = multiply(num1, num2);
    document.getElementById('calculation-result').innerHTML = result;
});

function divide(num1, num2) {
    return num1 / num2;
}

document.getElementById('divide').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('number1').value) || 0;
    let num2 = parseFloat(document.getElementById('number2').value) || 0;
    let result = divide(num1, num2);
    document.getElementById('calculation-result').innerHTML = result;
});