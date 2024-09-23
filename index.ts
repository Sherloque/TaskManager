import { TaskManager } from './TaskManager';

const taskManager = new TaskManager();

const task1 = taskManager.addTask('Завдання 1', 'Опис завдання 1');
const task2 = taskManager.addTask('Завдання 2', 'Опис завдання 2');
const task3 = taskManager.addTask('Завдання 3', 'Опис завдання 3');

console.log('Усі задачі:', taskManager);

const foundTask = taskManager.findTaskById(task1.id);
console.log('Знайдене завдання:', foundTask);

task1.toggleComplete();
console.log('Виконані задачі:', taskManager.filterByStatus(true));

console.log('Задачі, відсортовані по заголовку:', taskManager.sortByTitle());

taskManager.removeTask(task2.id);
console.log('Задачі після видалення:', taskManager);
