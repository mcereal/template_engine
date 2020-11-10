class Intern extends Employee {
  constructor(school) {
    this.school = school;
  }
  super(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
