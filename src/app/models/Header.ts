export interface IHeader {
    headerNavbar: IHeaderNavbar;
}

export interface IHeaderNavbar {
    discountDevice: IdiscountDevice;
}

export interface IdiscountDevice {
    discount: boolean;
    discountText: string;
    url: string;
}