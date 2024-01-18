let myArray = [15, 28, 14, 6, 40, 18, 35, 25];
let maxElement = myArray[0];
let minElement = myArray[0];

for (let i = 0; i < myArray.length; i++) {
    let currentElement = myArray[i];
    if (currentElement > maxElement) {
        maxElement = currentElement;
    } else if (currentElement < minElement) {
        minElement = currentElement;
    }
}

console.log("Phần tử lớn nhất trong mảng là:", maxElement);
console.log("Phần tử nhỏ nhất trong mảng là:", minElement);
