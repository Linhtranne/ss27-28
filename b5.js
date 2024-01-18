let originalArray = [3, 5, 2, 5, 7, 2, 8, 3, 9, 8];
let uniqueElement = originalArray.find(function (element, index, array) {
    return array.indexOf(element) === array.lastIndexOf(element);
});
if (uniqueElement !== undefined) {
    console.log("Phần tử đầu tiên là độc nhất trong mảng là:", uniqueElement);
} else {
    console.log("Không có phần tử độc nhất trong mảng.");
}
