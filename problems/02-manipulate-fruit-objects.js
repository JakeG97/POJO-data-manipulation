/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data')

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
    // Your code here
    array.forEach(fruit => {
        fruit[key] = value;
    })
    return array;
}

// console.log(addKeyAndValueToAll(fruits, "inStock", true));

/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
    // Your code here
    let fruit = array[index];
    fruit[key] = value;
    return fruit;
}

// console.log(addKeyAndValueToOne(fruits, "color", "red", 1));

/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
    // Your code here
    array.map(fruit => {
        for (let key in fruit) {
            if (key === oldKey) {
                fruit[newKey] = fruit[oldKey];
                delete fruit[oldKey];
            }else{
                fruit[key] = fruit[key];
            }
        }
    })
    return array;
}

// console.log(updateKeyName(fruits, "nutritions", "nutrition"));

/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
    // Your code here
    return array.map(fruit =>{
        let num = fruit["id"];
        let idStr = num.toString();
        let length = idStr.length;
        let addStr = "";
        for (let i = 0; i < 6 - length; i++) {
            addStr += "0";
        }
        fruit["id"] =addStr + idStr;
        return fruit["id"];
    })

// console.log(updateIdValues(fruits));

/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {
    // Your code here
    array.forEach(fruit => {
        removeKey(fruit, keyToDelete);
    })
    return array;
}

function removeKey(fruit, keyToDelete) {
    if (typeof fruit !== "object") {
        return;
    }
    for (let key in fruit) {
        if (key === keyToDelete) {
            delete fruit[key];
        }else {
            removeKey(fruit[key],keyToDelete);
        }
    }
}

// console.log(deleteKeysAndValues(fruits, "sugar"));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ addKeyAndValueToAll, addKeyAndValueToOne, updateKeyName, updateIdValues, deleteKeysAndValues ];