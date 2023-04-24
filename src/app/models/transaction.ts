import { ApplicationUser } from "./application-user";
import { TransactionClass } from "./transaction-class";

export class Transaction {
    
    public id?: number;

    public value: number;
    public description: string;
    public date: Date;
    public type: number;
    public idUser: string;
    public idTransactionClass: number;

    public transactionClassNavigation: TransactionClass;
    public userNavigation: ApplicationUser;

    constructor() {
        this.value = 0;
        this.description = '';
        this.date = new Date();
        this.type = 0;
        this.idUser = '';
        this.idTransactionClass = 0;
        this.transactionClassNavigation = new TransactionClass();
        this.userNavigation = new ApplicationUser();
    }
}
