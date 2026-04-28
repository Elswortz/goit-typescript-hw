class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

const employee = new Employee("Bogdan", "Shpitki", 34000);
const manager = new Manager("Alexey", "Obolon", 45000);
console.log(employee.getEmployeeDetails());
console.log(manager.getEmployeeDetails());
