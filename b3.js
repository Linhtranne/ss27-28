let originalArray = [2, 4, 6, 8, 10, 11 , 12, 14, 16, 18, 20];
let evenArray = originalArray.filter(function (element) {
    return element % 2 === 0;
});
console.log("Mảng mới sau khi xóa phần tử lẻ là:", evenArray);
