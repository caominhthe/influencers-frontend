import {Component, OnInit} from '@angular/core';
import {AdminInfluencerService} from './influencer.service';
import {SearchParamsModel} from '../../../helpers/search-params.model';
import {InfluencerInterface} from './influencer.interface';
import {Subject} from 'rxjs/internal/Subject';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-admin-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})

export class AdminInfluencerComponent implements OnInit {

  public params = new SearchParamsModel();
  public items: InfluencerInterface[];
  public totalItem: number;
  updateDataSubscription = new Subject();

  constructor( public influencerService: AdminInfluencerService) {
    this.updateDataSubscription.asObservable()
      .pipe(debounceTime(400))
      .subscribe(() => {
        this.getItems();
      });
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.influencerService.getInfluencer(this.params.buildParams()).then((data) => {
      if (this.params.page === 1) {
        this.items = data.items;
      } else {
        this.items = this.items.concat(data.items);
      }
      this.totalItem = data.total;
    });
  }

  updateSearch() {
    this.params.page = 1;
    this.updateDataSubscription.next();
  }

  loadMore() {
    this.params.page += 1;
    this.getItems();
  }

  public getNameJointString(arr) {
    return arr.map(i => i.name).join(', ');
  }
}
