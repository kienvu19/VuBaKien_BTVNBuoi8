// Bài 1:
const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1) What is the average income of all the people in the array?
// 2) Who are the people that are currently older than 30?
// 3) Get a list of the people's full name (firstName and lastName).
// 4) Get a list of people in the array ordered from youngest to oldest.
// 5) How many people are there in each department? //Development //Marketing //Sales //Office Management
let i = 0;
// 1) Thu nhập trung bình của tất cả những người trong mảng là bao nhiêu?
let totalSalary = 0;
for(i; i < people.length; i++){ 
    totalSalary += parseInt(people[i].salary);
}
console.log(totalSalary/people.length)
// 2) Những người hiện đang trên 30 tuổi là ai?
const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const olderThan30 = people.filter( e => getAge(e.DOB) > 30);
// console.log(olderThan30)
// 3) Nhận danh sách tên đầy đủ của mọi người (FirstName và LastName).
for(i; i < people.length; i++){
    let firstlastName = people[i].firstName +" "+ people[i].lastName;
    console.log(firstlastName);
}

// 4) Lấy danh sách những người trong mảng theo thứ tự từ trẻ nhất đến già nhất.
const sortAge = people.sort((a,b)=> getAge(a.DOB) - getAge(b.DOB))
console.log(sortAge)
// 5) Có bao nhiêu người trong mỗi bộ phận? //Development //Marketing //Sales //Office Management

// Bài 2: Sử dụng vòng lặp để xóa phần tử trùng lặp trong mảng.
const arr = [ 25, 50, 43, 36, 31, 26, 24, 19, 28, 24, 4, 18, 16, 48, 47, 49, 42, 15, 3, 16 ];
// // output: [ 25, 50, 43, 36, 31, 26, 24, 19, 28,  4, 18, 16, 48, 47, 49, 42, 15,  3 ]

function deduplicate(arr) {
  let isExist = (arr, x) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) return true;
    }
    return false;
  };
  const ans = [];
  arr.forEach((e) => {
    if (!isExist(ans, e)){
        ans.push(e);
    }
  });
  return ans;
}   
console.log(deduplicate(arr));

