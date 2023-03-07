import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetClass } from '../models/asset-class';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5069/api';

  constructor(private http: HttpClient) { }

  // Métodos para Asset

  // Métodos para AssetClass
  getAssetClass(): Observable<AssetClass[]> {
    return this.http.get<AssetClass[]>(`${this.baseUrl}/AssetClass`);
  }

  postAssetClass(AssetClass: AssetClass): Observable<AssetClass> {
    return this.http.post<AssetClass>(`${this.baseUrl}/AssetClass`, AssetClass);
  }

  putAssetClass(AssetClass: AssetClass): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/AssetClass/${AssetClass.id}`, AssetClass);
  }

  deleteAssetClass(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/AssetClass/${id}`);
  }

  // Métodos para AssetPortfolio

  // Métodos para Portfolio

  // Métodos para Transaction

  // Métodos para TransactionClass

  // Métodos para User

}