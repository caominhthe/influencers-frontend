import {Component} from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router';

const FB = (<any>window).FB;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor( public homeService: HomeService,
    public router: Router) {
  }

  login() {
    FB.login(async (response) => {
      if (response.authResponse) {
        const resp = await this.homeService.facebookLogin(response.authResponse.accessToken, response.authResponse.userID);
        alert(`Welcome ${resp.influencer.name}, please go to Admin dashboard to explore more functions`);
      } else {
      }
    }, {scope: 'email', return_scopes: true});
  }

  moveToAdminPage() {
    this.router.navigate(['/admin']);
  }
}
