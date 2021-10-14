export interface IHeader {
    headerNavbar: IHeaderNavbar;
}

export interface IHeaderNavbar {
    discountDevice: discountDevice;
}

export interface discountDevice {
    "discount": boolean;
}