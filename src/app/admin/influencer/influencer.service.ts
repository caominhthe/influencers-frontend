import {Injectable} from '@angular/core';
import {ApiService} from '../../../services/api-base.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs/internal/Subscription';
import {InfluencerInterface} from './influencer.interface';

export interface ListResponse<T> {
    items: T[];
    total: number;
    page: number;
    pages: number;
}

@Injectable({
    providedIn: 'root',
})
export class AdminInfluencerService extends ApiService {

    private getInfluencerDataSub: Subscription = new Subscription();

    constructor(
        http: HttpClient,
    ) {
        super(http);
    }

  public getInfluencer(params: HttpParams): Promise<ListResponse<InfluencerInterface>> {
        return new Promise((resolve, reject) => {
            try {
                if (!!this.getInfluencerDataSub) {
                    this.getInfluencerDataSub.unsubscribe();
                }
              this.getInfluencerDataSub = this.get('admin/influencer/', params).subscribe((data: ListResponse<InfluencerInterface>) => {
                    resolve(data);
                });
            } catch (e) {
                reject(e);
            }
        });
    }
}

