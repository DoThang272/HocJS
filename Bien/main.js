// alert("xinchap!")
// CÓ 2 kiểu comment // và /* */
/*
    Có 3 loại khai báo biến trong js là: var, let, const
	Var: Có đầu tiên trong 3 cái (CÓ trước khi xuất hiện es6) , 
	Let, const có sau khi phiên bản es6, const dùng để tạo biến không thể thay đổi.
*/

// Có 2 loại biến: Biến khởi tạo và khai báo biến thường, Biến khởi tạo là biến có giá trị ban đầu.

// Khai báo biến
let canNang;
var thang;

// Khai báo biến khởi tạo
var hoTen = "Do Anh Thang";
let tuoi = 21;
// const PI = 3.14;

// Muốn nối chuỗi trong js ta dùng dấu +
// console.log("Tên của bạn là: "+hoTen+ +" "+tuoi+" tuoi")

// Bài tập: HÃy viết chương trình, hiện thông bDOanháo lên trên màn hình, cho phép người dùng nhập tên -> xuất tên lên log

let ten = prompt("Mời bạn nhập tên: ");
// console.log("chào bạn ",typeof ten);
// console.log("Chào bạn ", ten+ " đã đến với doanhthang.vn")


// Muốn ép kiểu ta dùng parseInt, parseFloat, hoặc Number

// let numberB=  parseInt(prompt("Mời bạn nhập số B: "));
// console.log(numberB);
// console.log(typeof numberB);
// let numberC=  Number(prompt("Mời bạn nhập số C: "));
// console.log(numberC);
// console.log(typeof numberC);

// // Bài tập 4 Tính chgu vi và diện tích hình tròn, bán kính do người dùng nhập
// let PI = Math.PI;
// let bk = Number(prompt("Bán kính của hình tròn là: "));
// console.log("Chu vi: ",2*PI*bk);
// console.log("Diện tích: ",PI*bk*bk);

// Bài tập 5: TÍnh chu vi diện tích của hcn
// 1. Ng dùng nhập a, b là cd và cr hcn
// 2. in ra màn hình cvi và dtich
// let a = Number(prompt("Nhập chiều dài của hcn"))
// let b = Number(prompt("Nhập chiều rộng của hcn"))
// console.log("Chu vi: ",2*(a+b))
// console.log("Diện tích: ",(a*b))

// Bài tập 6: Tính điểm tb làm tròn đến số thứ 2 sau dấu chấm
var diemToan= Number(prompt("Mời bạn nhập điểm môn toán"));
var diemVan= Number(prompt("Mời bạn nhập điểm môn văn"));
var diemAnh= Number(prompt("Mời bạn nhập điểm môn anh"));

let diemTB = (diemAnh+ diemToan+ diemVan)/3
console.log(diemTB)
diemTB =diemTB.toFixed(2)
console.log(diemTB)

console.log("điểm trung bình là: ",diemTB)