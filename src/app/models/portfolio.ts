import { ApplicationUser } from "./application-user";

export class Portfolio {
    
    public id?: number;
    public name: string;
    public description: string;
    public idUser: string;

    public userNavigation: ApplicationUser;
    
    constructor() {
        this.name = '';
        this.description = '';
        this.idUser = '';

        this.userNavigation = new ApplicationUser();
    }
}
