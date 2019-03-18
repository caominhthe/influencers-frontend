import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

export abstract class ApiService {

    constructor(private http: HttpClient) {
    }

    protected getHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new HttpHeaders(headersConfig);
    }
    get<T>(path: string, params?: HttpParams): Observable<T> {
        const url = this.getUrlFromPath(path);
        const options = {
            ignoreLoadingBar: '',
            headers: this.getHeaders(),
            params: params
        };
        return this.http.get<T>(url, options);
    }

    post<T>(path: string, body: Object | null): Observable<T> {
        const url = this.getUrlFromPath(path);
        const options = {
            ignoreLoadingBar: '',
            headers: this.getHeaders(),
        };
        return this.http.post<T>(url, body, options);
    }

    private getUrlFromPath(path: string) {
        return `${environment.api_url}${path}`;
    }
}

