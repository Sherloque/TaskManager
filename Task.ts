/**
 * Class representing a task.
 */
export class Task {
  private static idCounter = 0;
  public readonly id: number;
  public title: string;
  public description: string;
  public completed: boolean;

  /**
   * Creates a new task with a unique ID, title, description, and an incomplete status.
   * @param title - The title of the task.
   * @param description - The description of the task.
   */
  constructor(title: string, description: string) {
    this.id = Task.idCounter++;
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  /**
   * Toggles the task's completion status.
   * If the task is incomplete, it will be marked as completed, and vice versa.
   */
  toggleComplete(): void {
    this.completed = !this.completed;
  }
}
