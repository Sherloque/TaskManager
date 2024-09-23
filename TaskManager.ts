import { Task } from "./Task";

export class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string, description: string): Task {
    const task = new Task(title, description);
    this.tasks.push(task);
    return task;
  }

  removeTask(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    index ? this.tasks.splice(index, 1) : false;
  }

  findTaskById(id: number): Task | undefined {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }

  filterByStatus(completed: boolean): Task[] {
    return this.tasks.filter((task) => task.completed === completed);
  }

  sortByTitle(): Task[] {
    return this.tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}
