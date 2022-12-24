import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  updateContent: boolean = true
  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      this.updateContent = !this.updateContent
      event.target.complete();
    }, 300);
  };
}
