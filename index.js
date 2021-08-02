// Write your solution in this file!
const employee = {
    name: 'London', 
    streetAddress: '123 Test St.'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee}
    newObject[key] = value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key]: value})
}

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
   delete employee[key];
   return employee
}