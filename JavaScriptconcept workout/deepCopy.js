function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const originalObject = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'traveling', 'cooking']
};

const copiedObject = deepCopy(originalObject);

// Modifying the copied object will not affect the original object
copiedObject.name = 'Jane';
copiedObject.address.city = 'Los Angeles';
copiedObject.hobbies.push('painting');

console.log('Original Object:', originalObject);
console.log('Copied Object:', copiedObject);
