class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
  }
  super(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;
