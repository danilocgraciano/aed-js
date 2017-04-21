class HotPotato {

    constructor(nameList, num) {
        this._queue = new Queue();
        nameList.forEach((e) => this._queue.enqueue(e));
        while (this._queue.size() > 1) {
            for (let i = 0; i < num; i++) {
                this._queue.enqueue(this._queue.dequeue());
            }
            console.log('%s foi eliminado(a) do jogo Batata Quente!', this._queue.dequeue());
        }
        console.log('O Vencedor é %s', this._queue.dequeue());
    }



}