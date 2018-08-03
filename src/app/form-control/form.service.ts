import { Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'RXJS';
import { FormControlModule } from '../form-control/form-control.module';

export interface dataPayload {
    source1: Number;
    source2: Number;
    daysEmployed: Number;
}

export interface dataResponse {
    response: number;
}

@Injectable({
    providedIn: 'root'
})
export class FormService implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    // url:string = "http://178.128.146.146:8000/predict"
    apiUrl: string = "/api/"

    getShit(): Observable<dataResponse> {
        // let params = new URLSearchParams();
        // params.append('EXT_SOURCE_1', String(.5));
        // params.append('EXT_SOURCE_2', String(.3));
        // params.append('DAYS_EMPLOYED', String(-500));

        // let options = new RequestOptions({params:params})

        return this.http.get<dataResponse>(this.apiUrl, {
            params : {
                'EXT_SOURCE_1' : ".5",
                'EXT_SOURCE_2' : ".3",
                'DAYS_EMPLOYED' : "-500"
        }}
    )
    }
}