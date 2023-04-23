import { Asset } from "./asset";
import { Portfolio } from "./portfolio";

export class AssetPortfolio {

    public id?: number;

    public quantity: number;
    public purchasePrice: number;
    public date: Date;
    public type: number;
    public idPortfolio: number;
    public idAsset: number;

    public portfolioNavigation: Portfolio;
    public assetNavigation: Asset;

    constructor() {
        this.quantity = 0;
        this.purchasePrice = 0;
        this.date = new Date();
        this.type = 0;
        this.idPortfolio = 0;
        this.idAsset = 0;
        this.portfolioNavigation = new Portfolio();
        this.assetNavigation = new Asset();
    }
}
