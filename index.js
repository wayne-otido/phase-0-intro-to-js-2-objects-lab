// Write your solution in this file!
let employee = {
  name: 'Andrew Nzioki',
  streetAddress: 'Nairobi ,Archives'
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee={ ...employee,[key]: value  };
  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}



// Test the updateEmployeeWithKeyAndValue() function
console.log("Before update:", employee);
employee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Broadway");
console.log("After update:", employee);

// Test the destructivelyUpdateEmployeeWithKeyAndValue() function
console.log("Before update:", employee);
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "789 Fifth Ave");
console.log("After update:", employee);

// Test the deleteFromEmployeeByKey() function
console.log("Before delete:", employee);
employee = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("After delete:", employee);

// Test the destructivelyDeleteFromEmployeeByKey() function
console.log("Before delete:", employee);
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("After delete:", employee);
