export class ApplicationUser {

    id: string;
    name: string;
    lastName: string;
    email: string;
    creationDate: Date;
    role: string;
    lastAccessDate: Date;
    isEmailConfirmed: boolean;
    fullName: string;
  
    constructor() {
      this.id = '';
      this.name = '';
      this.lastName = '';
      this.email = '';
      this.creationDate = new Date();
      this.role = '';
      this.lastAccessDate = new Date();
      this.isEmailConfirmed = false;
      this.fullName = '';
    }

  }
  