export interface IMain {
    fullSizeCard : IFullsizeCard;
}

export interface IFullsizeCard {
    isNew: boolean;
    productTitle: string;
    motto: string;
    startingPrice: number;
    buyUrl: string;
    discoverUrl: string;
    picUrl: string;
}
