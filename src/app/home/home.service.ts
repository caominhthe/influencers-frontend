import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-base.service';
import {HttpClient} from '@angular/common/http';
import {InfluencerInterface} from '../admin/influencer/influencer.interface';

export interface LoginReponse {
  influencer: InfluencerInterface;
  token: string;
}

@Injectable({
    providedIn: 'root',
})
export class HomeService extends ApiService {

    constructor(
        http: HttpClient,
    ) {
        super(http);
    }

  async facebookLogin(accessToken: string, socialId: string): Promise<LoginReponse> {
    return await this.post<LoginReponse>('influencer/facebook/login', {accessToken, socialId}).toPromise();
    }
}

