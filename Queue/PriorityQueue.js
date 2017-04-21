class PriorityQueue extends Queue {

    constructor() {
        super();
    }

    /**
     * Insere novo elemento na fila respeitando a prioridade
     * @param {*} element 
     * @param {*} priority 
     */
    enqueue(element, priority) {
        let added = false;

        let priorityElement = new QueueElement(element, priority);

        for (var i = 0; i < this._items.length; i++) {
            if (priorityElement.priority < this._items[i].priority) {
                this._items.splice(i, 0, priorityElement);
                added = true;
                break;
            }
        }
        if (!added)
            super.enqueue(priorityElement);
    }

    /**
     * Exibe os itens da fila já priorizados
     */
    print() {
        this._items.forEach(function (element) {
            console.log(`${element.element} - ${element.priority}`);
        });
    }
}