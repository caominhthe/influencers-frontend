import {HttpParams} from '@angular/common/http';

export class SearchParamsModel {
  size = 5;
  page = 1;
  search = null;
  ageFrom = null;
  ageTo = null;

  buildParams() {
    let params = new HttpParams().append('size', this.size.toString())
      .append('page', this.page.toString());
    if (this.search) {
      params = params.append('search', this.search);
    }
    if (this.ageFrom) {
      params = params.append('ageFrom', this.ageFrom);
    }
    if (this.ageTo) {
      params = params.append('ageTo', this.ageTo);
    }
    return params;
  }
}
