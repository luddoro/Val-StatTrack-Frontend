import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getUser(){
    let headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    return this.http.get<User>("http://localhost:8080/getUser/Edbergarn", {responseType: 'json', headers: headers});
  }

  getMatchHistory(accountId){
    let headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    return this.http.get<User>("http://localhost:8080/getMatchHistory/" + accountId, {responseType: 'json', headers: headers});
  }
}

export interface User {
  accountId: string;
  id: string;
  puuid: string;
  name: string;
  summonerLevel: number;
  profileIconId: number;
  revisionDate: number;
}