export class Asset {
    
    public id?: number;
    
    public name: string;
    public symbol: string;
    public description: string;
    public idAssetClass: number;
    
    constructor() {
        this.name = '';
        this.symbol = '';
        this.description = '';
        this.idAssetClass = 0;
    }
}
