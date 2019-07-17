export default class Todo {
    constructor(name, date , importance, project) {
      this.name = name;
      this.date = date;
      this.importance = importance;
      this.project = project; //id?
      this.id = Math.round(Math.random(1) * 1000000000);
    }
  }