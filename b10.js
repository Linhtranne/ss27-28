let Array = ["Gà", "Vịt", "Chuối", "Bò", "Lợn", "Nhộng", "Đá", "Cỏ", "Dưa"];
let lengthMap = {};
Array.forEach(function (element) {
    let length = element.length;
    if (!lengthMap[length]) {
        lengthMap[length] = [];
    }
    lengthMap[length].push(element);
});
let maxLength = Math.max(...Object.keys(lengthMap));
let longestArray = lengthMap[maxLength];
console.log("Mảng con chứa các phần tử phân biệt có độ dài lớn nhất là:", longestArray);