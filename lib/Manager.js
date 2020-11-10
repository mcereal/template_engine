class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
  super(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
