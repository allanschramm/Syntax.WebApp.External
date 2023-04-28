import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AssetClass } from '../models/asset-class';
import { AssetPortfolio } from '../models/asset-portfolio';
import { Asset } from '../models/asset';
import { Portfolio } from '../models/portfolio';
import { TransactionClass } from '../models/transaction-class';
import { Transaction } from '../models/transaction';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SyntaxService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  // Métodos para Asset
  getAssetList(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.baseUrl}/Asset`);
  }

  getAsset(id: number): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.baseUrl}/Asset/${id}`);
  }

  postAsset(Asset: Asset): Observable<Asset> {
    return this.http.post<Asset>(`${this.baseUrl}/Asset`, Asset);
  }

  putAsset(Asset: Asset): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Asset/`, Asset);
  }

  deleteAsset(id: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/Asset/${id}`);
  }

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
    return this.http.put<void>(`${this.baseUrl}/AssetClass/`, AssetClass);
  }

  deleteAssetClass(id: number): Observable<any> {
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
    return this.http.put<void>(`${this.baseUrl}/AssetPortfolio/`, assetPortfolio);
  }

  deleteAssetPortfolio(id: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/AssetPortfolio/${id}`);
  }

  // Métodos para Portfolio
  getPortfolioList(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(`${this.baseUrl}/Portfolio`);
  }

  getPortfolio(id: number): Observable<Portfolio> {
    return this.http.get<Portfolio>(`${this.baseUrl}/Portfolio/${id}`);
  }

  postPortfolio(portfolio: Portfolio): Observable<Portfolio> {
    return this.http.post<Portfolio>(`${this.baseUrl}/Portfolio`, portfolio);
  }

  putPortfolio(portfolio: Portfolio): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/Portfolio/`, portfolio);
  }

  deletePortfolio(id: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/Portfolio/${id}`);
  }

  // Métodos para TransactionClass
  getTransactionClassList(): Observable<TransactionClass[]> {
    return this.http.get<TransactionClass[]>(`${this.baseUrl}/TransactionClass`);
  }

  getTransactionClass(id: number): Observable<TransactionClass> {
    return this.http.get<TransactionClass>(`${this.baseUrl}/TransactionClass/${id}`);
  }

  postTransactionClass(transactionClass: TransactionClass): Observable<TransactionClass> {
    return this.http.post<TransactionClass>(`${this.baseUrl}/TransactionClass`, transactionClass);
  }

  putTransactionClass(transactionClass: TransactionClass): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/TransactionClass/`, transactionClass);
  }

  deleteTransactionClass(id: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/TransactionClass/${id}`);
  }
  
  // Métodos para Transaction
  getTransactionList(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/Transaction`);
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/Transaction/${id}`);
  }

  postTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/Transaction`, transaction);
  }

  putTransaction(transaction: Transaction): Observable<any> {
    return this.http.put<void>(`${this.baseUrl}/Transaction/`, transaction);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/Transaction/${id}`);
  }

  public mostrarMensagem(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }  
  
}