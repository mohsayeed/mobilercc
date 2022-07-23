import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { ApiMethod, AuthEndPoints } from '../constants/api-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class HttpService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  requestCall(
    method: ApiMethod,
    api: apiAuthEndPoints ,
    data: any = {},
    queryParams: string = '',
    header: any = {}
  ) {
    let response;
    switch (method) {
      case ApiMethod.GET:
        response = this.http
          .get(`${environment.apiUrl}${api}` + queryParams, header)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.POST:
        response = this.http
          .post(`${environment.apiUrl}${api}` + queryParams, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.DELETE:
        response = this.http
          .delete(`${environment.apiUrl}${api}` + queryParams)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.PUT:
        response = this.http
          .put(`${environment.apiUrl}${api}` + queryParams, data)
          .pipe(catchError((err) => this.handleError(err, this)));
        break;
      case ApiMethod.PATCH:
        response = this.http
         .patch(`${environment.apiUrl}${api}`+queryParams,data)
         .pipe(catchError((err) => this.handleError(err, this)));
        break;
      default:
        break;
    }
    //Create model for response
    return response;
  }

  handleError(error: HttpErrorResponse, self: any) {
    if (error.status == 401) {
    }
    return throwError({ error: error.error, status: error.status });
  }

  get<T>(url: apiAuthEndPoints, queryParams: string = '', params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}${url}` + queryParams, { params })
      .pipe(catchError((error) => this.handleError(error, this)));
  }

  post<T>(url: apiAuthEndPoints, postData: T, queryParams: string = '', params?: HttpParams): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}${url}` + queryParams, postData, { params })
      .pipe(catchError((error) => this.handleError(error, this)));
  }

  put<T>(url: apiAuthEndPoints, putData: T, queryParams: string = '', params?: HttpParams): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}${url}` + queryParams, putData, { params })
      .pipe(catchError((error) => this.handleError(error, this)));
  }

  patch<T>(url: apiAuthEndPoints, patchData: T, queryParams: string = '', params?: HttpParams): Observable<T> {
    return this.http.patch<T>(`${environment.apiUrl}${url}` + queryParams, patchData, { params })
      .pipe(catchError((error) => this.handleError(error, this)));
  }

  delete<T>(url: apiAuthEndPoints, queryParams: string = '', params?: HttpParams): Observable<T> {
    return this.http.delete<T>(`${environment.apiUrl}${url}` + queryParams, { params })
      .pipe(catchError((error) => this.handleError(error, this)));
  }
  
}

type apiAuthEndPoints = AuthEndPoints;

