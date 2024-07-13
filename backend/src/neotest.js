/*
Using Square Brackets ([ ]) for Keys: When you enclose a variable inside square brackets 
within an object literal ({ [sortBy]: sortOrder }), JavaScript interprets this as a computed property name. 
This means the value of sortBy is used to determine the actual key name in the resulting object.

Direct Assignment for Values: For values like sortOrder, which are not used to determine keys dynamically 
but are straightforward values assigned to keys, you do not need to use square brackets.

*/

const sortBy = 'createdAt'
const sortOrder = 'descending'

const sortOptions = { [sortBy]: sortOrder }
console.log(sortOptions) // Outputs: { createdAt: 'descending' }
console.log('*************************')

const sortOptions2 = { sortBy: sortOrder }
console.log(sortOptions2) // Outputs: { sortBy: 'descending' }
console.log('*************************')
