export class Portfolio {
    
    public id?: number;
    public name: string;
    public description: string;
    public idUser?: number;

    constructor() {
        this.name = '';
        this.description = '';
        this.idUser = 0;
    }

}
