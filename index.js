
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}

const employee = {
  name: 'Sam',
  streetAddress: "11 Broadway",
  
};

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

console.log("Original Employee:", employee);
console.log("Updated Employee:", updatedEmployeeup);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

expect(employee, 'streetAddress', '12 Broadway').to.eql({
  name: 'Sam',
  streetAddress: '12 Broadway',
});

expect (employee).to.eql({
  name: 'Sam',
  streetAddress: '12 Broadway',
});

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
   delete newEmployee[key];
  return newEmployee;
}

let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'undefined');

employee.name = 'Sam';

console.log(employee);




