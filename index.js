//object
//bai1
// const objectUser = {
//     ten: 'Tung',
//     tuoi: 20,
// };
// //1
// // const objectShow = Object.values(objectUser);
// console.log(`Tên: ${objectUser.ten} - Tuổi: ${objectUser.tuoi}`);
// //2
// objectUser.ten = objectUser.ten + " Nguyen"
// console.log(`Tên: ${objectUser.ten} - Tuổi: ${objectUser.tuoi}`);
// //3
// //c1
// // objectUser.tuoi = 30;
// // console.log(`Tên: ${objectUser.ten} - Tuổi: ${objectUser.tuoi}`);
// //c2
// const cloneUser = {
//     ...objectUser,
//     tuoi: 30,
// };
// console.log(`Tên: ${cloneUser.ten} - Tuổi: ${cloneUser.tuoi}`);
//bai2
// const Shape = {
// 	width: 200,
// 	height: 400,
// 	name: 'rectangle',
// }
// //1
// console.log(`<Hình: ${Shape.name}>-<Chiều rộng: ${Shape.width}>-<Chiều dài: ${Shape.height}>`);
// //2
// const rong = Shape.width;
// const cao = Shape.height;
// let chuvi = (rong+cao)*2;
// console.log(`Chu vi: ${(Shape.width+Shape.height)*2}`)
// let dientich = rong*cao;
// console.log(`Diện tích: ${(Shape.width*Shape.height)}`)
// let i=0;
// let str = "";
// const arr = [1,2,3,4,5];
// const arrNew = [];
// // do{
// //     str += i;
// //     i++;
// // }
// // while(i<=10)
// for(i;i<arr.length;i++){
//     arrNew[i] = arr[i] *2;
// }
// console.log("arrN", arrNew);
const obj ={
    name: "t3h",
    profile: "Academy",
    etablish: "2015",
    mout: 1000,
};
for(const key in obj){
    console.log("key, ",key);
}
