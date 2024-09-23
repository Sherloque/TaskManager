"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(title, description) {
        this.id = Task.idCounter++;
        this.title = title;
        this.description = description;
        this.completed = false;
    }
    toggleComplete() {
        this.completed = !this.completed;
    }
}
exports.Task = Task;
Task.idCounter = 0;
