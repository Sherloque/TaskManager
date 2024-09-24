import { Task } from "./Task";

/**
 * Class which is responsible for task collection managment.
 */
export class TaskManager {
  private tasks: Task[] = [];

  /**
   * Returns the new task added to the collection.
   * @param title The title of the task.
   * @param description The description of the task.
   * @returns New task.
   */
  addTask(title: string, description: string): Task {
    const task = new Task(title, description);
    this.tasks.push(task);
    return task;
  }

  /**
   * Removes the task specified by id from the collection.
   * @param id Task id.
   */
  removeTask(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    index ? this.tasks.splice(index, 1) : false;
  }

  /**
   * Finds the task specified by id in the collection.
   * @param id Task id.
   * @returns Either found task or undefined.
   */
  findTaskById(id: number): Task | undefined {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }

  /**
   * Filters the task collection by status and returns a filtered collection.
   * @param completed Task status to filter the collection.
   * @returns A filtered collection of tasks with met requierement.
   */
  filterByStatus(completed: boolean): Task[] {
    return this.tasks.filter((task) => task.completed === completed);
  }

  /**
   * Sorts tasks by task.Title property alphabetically
   * @returns A sorted collection of tasks.
   */
  sortByTitle(): Task[] {
    return this.tasks.sort((a, b) => a.title.localeCompare(b.title));
  }
}
