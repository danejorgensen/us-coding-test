const fs = require('fs');
const path = require('path');
const faker = require('faker');


const numberOfMembers = 100;

let data = [];

for (let i = 0; i < numberOfMembers; i++) {
	let item = {
		id: faker.random.uuid(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		title: faker.name.title(),
		addresses: [],
		phone: faker.phone.phoneNumber(),
		company: faker.company.companyName(),
		department: faker.commerce.department(),
		url: faker.internet.url(),
		image: faker.image.imageUrl()
	};

	let numAddresses = Math.floor(Math.random() * 3 + 1);
	for (let j = 0; j < numAddresses; j++) {
		item.addresses.push({
			id: faker.random.uuid(),
			address: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.stateAbbr(),
			zip: faker.address.zipCode()
		});
	}

	let primaryAddressIndex = Math.floor(Math.random() * numAddresses);
	item.primaryAddressId = item.addresses[primaryAddressIndex].id;


	data.push(item);
}


data = JSON.stringify(data, null, 4);

let fileName = path.join(__dirname, 'public', 'data', 'people.json');
fs.writeFileSync(fileName, data);
