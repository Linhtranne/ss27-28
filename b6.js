let Array = [8, 2, 5, 1, 7, 3, 10, 4, 6, 9];
let randomSortedArray = Array.slice().sort(function() {
    return 0.5 - Math.random();
});
console.log("Mảng đã sắp xếp theo thứ tự ngẫu nhiên là:", randomSortedArray);
