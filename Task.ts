export class Task {
    private static idCounter = 0;
    public id: number;
    public title: string;
    public description: string;
    public completed: boolean;
  
    constructor(title: string, description: string) {
      this.id = Task.idCounter++;
      this.title = title;
      this.description = description;
      this.completed = false;
    }
  
    toggleComplete(): void {
      this.completed = !this.completed;
    }
  }
  