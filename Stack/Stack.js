class Stack {

    constructor() {
        this._items = [];
    }

    /**
     * Empilhando elementos na pilha
     * @param {*} element 
     */
    push(element) {
        this._items.push(element);
    }

    /**
     * Desempilhando elementos da pilha
     */
    pop() {
        return this._items.pop();
    }

    /**
     * Verifica o elemento que está no topo,
     * mas não o remove
     */
    peek() {
        return this._items[this._items.length - 1];
    }

    /**
     * Verifica se a pilha está vazia
     */
    isEmpty() {
        return this._items.length == 0;
    }

    /**
     * Verifica o tamanho da pilha
     */
    size() {
        return this._items.length;
    }

    /**
     * Limpa os elementos da pilha
     */
    clear() {
        this._items = [];
    }

    /**
     * Exibe os itens da pilha
     */
    print() {
        console.log(this._items.toString());
    }
}