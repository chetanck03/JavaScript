let arr = [1,2,4,5,7]

console.log(arr);
console.log(arr.length);

console.log(arr[1])

// Array is mutable
console.log('\n')

arr[1] = 566;
console.log(" Type of Array ")

console.log(arr[1], typeof arr);


//  Array convert into String 
console.log('\n')

console.log(" Array into String ")
console.log(arr.toString())
console.log(arr.join(" and "))

// Remove last 
console.log('\n')

console.log(" Remove Last Element ")
console.log(arr.pop())
console.log(arr.join(" and "))

// Add the last 
console.log('\n')

console.log(" Add Last Element ")
console.log(arr.push('chetan'))
console.log(arr.join(" and "))

// Remove first element
console.log('\n')

console.log(" Remove First Element ")
console.log(arr.shift())
console.log(arr.join(" and "))

// Add first element
console.log('\n')

console.log(" Add First Element ")
console.log(arr.unshift('ck'))
console.log(arr.join(" and "))

// Delete element
console.log('\n')
console.log(" Delete Element ")
delete arr[3]
console.log(arr.join(" and "))

