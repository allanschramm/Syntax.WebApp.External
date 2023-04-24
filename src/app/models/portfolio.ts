export class Portfolio {
    
    public id?: number;
    public name: string;
    public description: string;
    public idUser: string;

    constructor() {
        this.name = '';
        this.description = '';
        this.idUser = '';
    }
}
