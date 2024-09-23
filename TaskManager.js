"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Task_1 = require("./Task");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(title, description) {
        const task = new Task_1.Task(title, description);
        this.tasks.push(task);
        return task;
    }
    removeTask(id) {
        const index = this.tasks.findIndex((task) => task.id === id);
        index ? this.tasks.splice(index, 1) : false;
    }
    findTaskById(id) {
        const task = this.tasks.find((task) => task.id === id);
        return task;
    }
    filterByStatus(completed) {
        return this.tasks.filter((task) => task.completed === completed);
    }
    sortByTitle() {
        return this.tasks.sort((a, b) => a.title.localeCompare(b.title));
    }
}
exports.TaskManager = TaskManager;
