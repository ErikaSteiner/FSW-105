

const employees = [];
                                                        
function Employee(name, jobtitle, salary, status = "Full Time") {
  this.name = name;
  this.jobtitle = jobtitle;
  this.salary = salary;
  this.status = status;
};
Employee.prototype.printEmployeeForm = function(){
    console.log(`
    Name: ${this.name},
    Job Title: ${this.jobtitle},
    Salary: ${this.salary},
    Status: ${this.status}`);
};

let Tim = new Employee("Tim Smith", "Manager", 70000);
let Gary = new Employee("Gary White", "Operation Speaclest", 50000 );
let Ashley= new Employee("Ashley Baker", "Secratary", 35000, "Part Time");

Tim.printEmployeeForm();
Gary.printEmployeeForm();
Ashley.printEmployeeForm();

function addEmployeeToArray(e) {
employees.push(e);
}
addEmployeeToArray(Tim);
addEmployeeToArray(Gary);
addEmployeeToArray(Ashley);

console.log(employees);

























































































































































































































































































































































































































































































































































































































































































































































































