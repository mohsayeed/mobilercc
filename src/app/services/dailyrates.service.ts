import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DailyratesService {
  constructor(private httpClient: HttpClient, private router: Router) { }
}
