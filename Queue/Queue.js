class Queue {

    constructor() {
        this._items = [];
    }

    /**
     * Insere novo elemento na fila'
     * @param {*} element 
     */
    enqueue(element) {
        this._items.push(element);
    }

    /**
     * Remove primeiro elemento da fila'
     */
    dequeue() {
        return this._items.shift();
    }

    /**
     * Mostra primeiro elemento da fila
     */
    front() {
        return this._items[0];
    }

    /**
     * Verifica se a fila está vazia
     */
    isEmpty() {
        return this._items.length == 0;
    }

    /**
     * Retorna o tamanho da fila
     */
    size() {
        return this._items.length;
    }

    /**
     * Exibe os itens da fila
     */
    print() {
        console.log(this._items.toString());
    }
}