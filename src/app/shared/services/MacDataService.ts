import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import {map, tap} from "rxjs/operators"
import { IHeader, IHeaderNavbar } from "src/app/models/Header";
import { IMain } from "src/app/models/Main";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class MacDataService {
    
    constructor (private httpClient : HttpClient) {

    }

    getHeader(): Observable<IHeaderNavbar> {
        return this.httpClient.get<IHeader[]>('http://localhost:3000/header').pipe(map((data) => data[0]?.headerNavbar))
    }

    getMain(): Observable<IMain[]> {
        return this.httpClient.get<IMain[]>('http://localhost:3000/main');
    }

    getFooter(): Observable<any> {
        return this.httpClient.get<any>('http://localhost:3000/footer');
    }

}