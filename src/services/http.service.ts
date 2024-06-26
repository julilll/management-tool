import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Item } from '../shared/item-models.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl).pipe(catchError((error: any) => {throw error.message}))
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item).pipe(catchError((error: any) => {throw error.message}));
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${item.id}`, item).pipe(catchError((error: any) => {throw error.message}));
  }
}
