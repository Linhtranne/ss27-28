let userStringInput = prompt("Nhập vào một chuỗi bất kỳ:");
let resultSubstrings = [];
for (let i = 0; i < userStringInput.length; i++) {
    for (let j = i + 1; j <= userStringInput.length; j++) {
        resultSubstrings.push(userStringInput.slice(i, j));
    }
}
console.log("Kết quả là:", resultSubstrings);