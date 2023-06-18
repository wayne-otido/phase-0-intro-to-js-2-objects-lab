let employee = {
  name: "John",
  streetAddress : "Kilimani"
}
console.log(employee)
function updateEmployeeWithKeyAndValue() {
  employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  }
  console.log(employee)
  return employee
}
updateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(){
  
}