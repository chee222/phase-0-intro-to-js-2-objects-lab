function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}

const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway'
};

// Modifying the 'streetAddress' property of the employee
employee.streetAddress = '12 Broadway';

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

console.log("Original Employee:", employee);
console.log("Updated Employee:", updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log('Original Employee:', employee);

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');

console.log('Updated Employee:', employee);

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');