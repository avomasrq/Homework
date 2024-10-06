let nameStore = '7Eleven'
let losAngeles;
const store = {
    name: nameStore,
    rating: 4.9,
    isAStore: true,
    address: null,
    city: losAngeles,
    cashier: 'Roman'

}

store.cashier = 'Gleb';
store.products = 'Soft drinks';
delete store.city;


console.log(store);

const vehicle = {
    brandName: 'BMW',
    model: 'X5m',

}

vehicle.model = 'M1';

delete vehicle.model;

console.log(vehicle);

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}

for (let key in  salaries) {
    console.log(key, '=', salaries[key]);
}
console.log(salaries);