function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
  }
 const verification = checkAge(19);

 //////////////////////////////

 function pow(x, n) {
    let result = 1; 
    for (let i = 0; i < n; i++) {
      result *= x; 
    }
    return result; 
  }
console.log(pow(3, 2)); // 9
console.log(pow(3, 3)); // 27
console.log(pow(1, 100)); // 1

//////////////////////////////

const ask = (q, y, n) => confirm(q) ? y() : n();

ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));

//////////////////////////////

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr); 

//////////////////////////////

// let john = { name: "Джон", age: 22 };
// let jane = { name: "Джейн", age: 29 };
// let alex = { name: "Алекс", age: 31 };

// let users = [john, jane, alex];

// let names = users.map(user => user.name);

// alert(names); 

//////////////////////////////

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// alert(usersMapped[0].id); 
// alert(usersMapped[0].fullName); 

//////////////////////////////

function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    
    return totalAge / users.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [vasya, petya, masha];
  
  alert(getAverageAge(arr)); 
  
