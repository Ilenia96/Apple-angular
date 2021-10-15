export interface IFooter {
    footerNav : IFooterNav;
}

export interface IFooterNav {
    footerUpData: IFooterUpData;
}

export interface IFooterUpData {
    notesArray: string[];
    navLinkString: string;
}





// --------
// export interface IFooter {
//     footerContainer : FooterContainer;
// }

// export interface FooterContainer {
//     notesArray: string[];
//     navLinkString: string;
// }