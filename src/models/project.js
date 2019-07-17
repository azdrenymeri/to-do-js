export default class Project {
    constructor(name,
      id = Math.round(Math.random(1) * 1000000000)
    ) {
      this.name = name;
      this.id = id;
      this.todos = {};
    }
  }