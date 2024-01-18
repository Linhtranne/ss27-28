// Tham Trị (Primitive Values):
// Các kiểu dữ liệu như số, chuỗi, boolean, null và undefined được truyền theo tham trị.
// Khi gán giá trị của một biến tham trị cho một biến khác, giá trị được sao chép và được lưu trữ độc lập trong bộ nhớ.
// Tham Chiếu (Reference Values):
// Các kiểu dữ liệu như đối tượng và mảng được truyền theo tham chiếu.
// Khi gán giá trị của một biến tham chiếu cho một biến khác, thực chất chỉ có một tham chiếu tới đối tượng hoặc mảng đó trong bộ nhớ.
let numbers = [1, 2, 3, 4, 5];
let newArr = numbers;
newArr.push(8);
console.log(newArr);
console.log(numbers);
// Kết quả của đoạn này sẽ là mảng mới newArr với giá trị [1, 2, 3, 4, 5, 8], và mảng numbers vẫn giữ nguyên giá trị [1, 2, 3, 4, 5].