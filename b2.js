let firstNumber = parseInt(prompt("Nhập a:"));
let secondNumber = parseInt(prompt("Nhập b:"));

if (isNaN(firstNumber) || isNaN(secondNumber) || !Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    console.log("Vui lòng nhập vào hai số nguyên.");
} else {
    let numberArray = [];
    for (let i = Math.min(firstNumber, secondNumber); i <= Math.max(firstNumber, secondNumber); i++) {
        numberArray.push(i);
    }
    console.log("Mảng chứa tất cả các số trong khoảng giữa", firstNumber, "và", secondNumber, "là:", numberArray);
}
