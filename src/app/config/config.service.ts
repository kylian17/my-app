import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { __param } from 'tslib';
import { appDto } from './appDto';

export interface appsDto {
    feed: appDto;
}

@Injectable()
export class ConfigService {

  configUrl = 'https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json';
  limit = 100; 
  constructor(private http: HttpClient) { 
  }

  getConfig():Observable<appsDto> {
    return this.http.get<appsDto>(this.configUrl );
  }
}