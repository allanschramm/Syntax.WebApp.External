export class Transaction {
    
    public id?: number;

    public value: number;
    public description: string;
    public date: Date;
    public type: number;
    public idUser: number;
    public idTransactionClass: number;

    constructor() {
        this.value = 0;
        this.description = '';
        this.date = new Date();
        this.type = 0;
        this.idUser = 0;
        this.idTransactionClass = 0;
    }
}
