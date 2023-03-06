export class AssetPortfolio {
    
    public id?: number;
    
    public quantity: number;
    public purchasePrice: number;
    public date: Date;
    public type: string;
    public idPortfolio: number;
    public idAsset: number;
    
    constructor() {
        this.quantity = 0;
        this.purchasePrice = 0;
        this.date = new Date();
        this.type = '';
        this.idPortfolio = 0;
        this.idAsset = 0;
    }
}
