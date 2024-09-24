import { TaskManager } from './TaskManager';

const taskManager = new TaskManager();

const task1 = taskManager.addTask('Task 1', 'Task description 1');
const task2 = taskManager.addTask('Task 2', 'Task description 2');
const task3 = taskManager.addTask('Task 3', 'Task description 3');

console.log('All tasks:', taskManager);

const foundTask = taskManager.findTaskById(task1.id);
console.log('Found task:', foundTask);

task1.toggleComplete();
console.log('Completed tasks:', taskManager.filterByStatus(true));

console.log('Tasks sorted by title:', taskManager.sortByTitle());

taskManager.removeTask(task2.id);
console.log('Tasks after removal:', taskManager);


const task4 = taskManager.addTask('Task 4', 'Description task 4');
task4.toggleComplete();
console.log('Completed tasks:', taskManager.filterByStatus(true));
console.log('Tasks sorted by title:', taskManager.sortByTitle());



