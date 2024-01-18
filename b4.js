let originalArray = [2, 3, 4, 6, 9 , 8, 10, 15 , 12, 14, 16, 18, 20];
let evenArray = originalArray.filter(function (element) {
    return element % 2 === 0;
});
let oddArray = originalArray.filter(function (element) {
    return element % 2 !== 0;
});
console.log("Mảng chẵn là:", evenArray);
console.log("Mảng lẻ là:", oddArray);
