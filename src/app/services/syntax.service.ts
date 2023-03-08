import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssetClass } from '../models/asset-class';
import { AssetPortfolio } from '../models/asset-portfolio';

@Injectable({
  providedIn: 'root'
})
export class SyntaxService {
  private baseUrl = 'http://localhost:5069/api';

  constructor(private http: HttpClient) { }

  // Métodos para Asset

  // Métodos para AssetClass
  getAssetClassList(): Observable<AssetClass[]> {
    return this.http.get<AssetClass[]>(`${this.baseUrl}/AssetClass`);
  }

  getAssetClass(id: number): Observable<AssetClass[]> {
    return this.http.get<AssetClass[]>(`${this.baseUrl}/AssetClass/${id}`);
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
  getAssetPortfolioList(): Observable<AssetPortfolio[]> {
    return this.http.get<AssetPortfolio[]>(`${this.baseUrl}/AssetPortfolio`);
  }

  getAssetPortfolio(id: number): Observable<AssetPortfolio> {
    return this.http.get<AssetPortfolio>(`${this.baseUrl}/AssetPortfolio/${id}`);
  }

  postAssetPortfolio(assetPortfolio: AssetPortfolio): Observable<AssetPortfolio> {
    return this.http.post<AssetPortfolio>(`${this.baseUrl}/AssetPortfolio`, assetPortfolio);
  }

  putAssetPortfolio(assetPortfolio: AssetPortfolio): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/AssetPortfolio/${assetPortfolio.id}`, assetPortfolio);
  }

  deleteAssetPortfolio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/AssetPortfolio/${id}`);
  }

  // Métodos para Portfolio

  // Métodos para Transaction

  // Métodos para TransactionClass

  // Métodos para User

}