// let person = {
//     id: 1,
//     name: "Son",
//     age: 20,
//     gender: "male",
//     address: {
//         number: 23,
//         street: "Hai Ba Trung",
//         city: "Da Nang",
//         country: "Viet Nam",
//     },
//     single: true,
//     dance: function() {
//         console.log('Tay dơ cao lên trời');
//         console.log('Tay dang ngang bả vai');
//         console.log('Tay song song trước mặt');
//         console.log('Buông cả hai tay');
//     },// anonymous function - hàm không tên ẩn danh
//     //Cú pháp cs6: - cú pháp viết tắt shorthand
//     sayHello(name) {
//         console.log("Hello ",name);
//         console.log(this);
//     },
//     introduce() {
//         console.log(`Hello, my name is ${this.name} - I'm ${this.age} years old`);
//         console.log(this);
//     }
// };

// person.dance();

// person.sayHello("Son");


// person.introduce();


// // let introduce = person.introduce;

// let introduce = function(){
//     console.log(`Hello, my name is ${this.name} - I'm ${this.age} years old`);
//     console.log(this);
// }

// //bind - ràng buộc từ khóa this đến 1 đối tượng nào đó
// // introduce = introduce.bind(person);
// // introduce = introduce.bind({name: 'Son', age: 30});
// introduce();

// //call , apply - ràng buộc từ khóa this, nhưng hàm sẽ được thực thi luôn

// introduce.call({name:'Quang', age: 30}, 70, 150);
// //
// introduce.apply({name:'Quang', age: 30}, [50, 190]);

//Viết chương trình khai báo mảng gồm nhiều đối tượng Book có hai
//thuộc tính author và name. Yêu cầu người dùng nhập tên Author từ bàn phím
//thông qua hàm prompt(). Sau đó tiến hành tìm kiếm thông tin sách theo tác giả.
//Nếu tìm thấy thì in ra ngoài màn hình đối tượng Book  tìm được,
//nếu không tìm thấy thì in ra “Không tìm thấy sách”

// const books = [
//     {
//         name: "conan",
//         author: "quang",
//     },
//     {
//         name: "doraemon",
//         author: "min",
//     },
//     {
//         name: "one piece",
//         author: "ngu",
//     }
// ];
// const textAuthor = prompt("Nhập tên tác giả");

// const findAuthor = books.find(book => book.author === textAuthor);

// if (!findAuthor) {
//     console.log("Không tìm thấy sách");
// } else {
//     console.log(findAuthor.name);
// }


// let tacgia = prompt('nhap tac gia');

// let arr = [{
//     author: 'quang',
//     Name: 'doi ko nhu mo',
// },
// {
//     author: 'son',
//     Name: 'noi phet',
// },
// {
//     author: 'tac',
//     Name: 'rapper',
// },
// {
//     author: 'hai',
//     Name: 'ban banh',
// },]

// for (let i in arr) {
//     if (arr[i] === undefined) {
//         continue;
//     }
//     if (arr[i].author === tacgia) {
//         console.log(arr[i]);
//         break;
//     }
//     else {
//         console.log('Không tìm thấy sách');
//     }
// }

//Cho một mảng products chứa các đối tượng product gồm
//các thông tin sau: id, product_name, price. Xây dựng hàm
//để sắp xếp danh sách products tăng dần và in ra mảng đã
//được sắp xếp ra ngoài màn hình

// const products = [
//     {
//         id: 1,
//         product_name: "Iphone",
//         price: 1000,
//     },
//     {
//         id: 2,
//         product_name: "Samsung",
//         price: 2000,
//     },
//     {
//         id: 3,
//         product_name: "Nokia",
//         price: 3000,
//     },
//     {
//         id: 4,
//         product_name: "Xiaomi",
//         price: 4000,
//     },
//     {
//         id: 5,
//         product_name: "Oppo",
//         price: 500,
//     }
// ];

// products.sort(function (a, b) { return a.price - b.price; });
// console.log(products);

// for (let i = 0; i < products.length - 1; i++) {
//     for (let j = i + 1; j < products.length; j++) {
//         if (products[i].price > products[j].price) {
//             let temp = products[i];
//             products[i] = products[j];
//             products[j] = temp;
//         }
//     }
// }

// console.log(products);

// Tạo một mảng users là một mảng trống.
// Lấy thông tin từ người dùng để tạo đối tượng user gồm các thông tin sau: id, user_name, email, password
// Tiến hành validate (kiểm tra tính hợp lệ của) dữ liệu
// Tên, email và mật khẩu không được để trống
// Tên không được ngắn hơn 3 ký tự
// Email đúng định dạng
// Mật khẩu tối thiểu 8 ký tự
// Nếu các dữ liệu nhập vào không thỏa mãn thì yêu cầu người dùng nhập lại dữ liệu
// Nếu các dữ liệu nhập vào thỏa mãn điều kiện thì thêm đối tượng vào trong mảng

// const users = [];

// const switchFn = true;
// do {
//     const choose = prompt(
//         `
//         1: Nhập A để tiếp tục
//         2: nhập E để thoát
//         `
//     )
//     choose = choose.toLowerCase();
//     switch (choose) {
//         case "1":
//             address()
//             break;
//         case "e":
//             break;
//         default:
//     }
// } while (choose.toLowerCase() === "e");

// function address() {
//     const user = {
//         id: user[users.length - 1].id + 1 || 1,
//         name: '',
//         email: '',
//         password: '',
//     }
//     let name, email, password

//     //Vòng lặp điền tên cho đến khi hợp lý
//     do {
//         name = prompt('enter name: ');
//     }
//     while (name === "" || isNaN(name) || name.length < 3)

//     do {
//         email = prompt('enter email: ');
//     }
//     while ( )

// }


