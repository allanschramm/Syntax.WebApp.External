export interface ApplicationUser {
    id: string;
    name: string;
    lastName: string;
    email: string;
    creationDate: Date;
    role: string;
    lastAccessDate: Date;
    isEmailConfirmed: boolean;
    fullName: string;
}
