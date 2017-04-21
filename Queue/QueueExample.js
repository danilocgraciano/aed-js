console.groupCollapsed("Queue Examples");
let queue = new Queue();
console.log(queue.isEmpty());//true

queue.enqueue('Jhon');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print();
console.log(queue.size());//3
console.log(queue.isEmpty());//false
queue.dequeue();
queue.dequeue();
queue.print();
console.groupEnd();

console.groupCollapsed("Priority Queue Examples");
let pQueue = new PriorityQueue();
pQueue.enqueue('John', 2);
pQueue.enqueue('Jack', 1);
pQueue.enqueue('Camila', 1);
pQueue.print();
console.groupEnd();

console.groupCollapsed("Circular Queue (Hot Potato)");
let nameList = ['Jhon', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let hotPotato = new HotPotato(nameList, 7);
console.groupEnd();