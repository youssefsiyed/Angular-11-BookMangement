import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { ApiService } from 'src/app/shared/services/api.service';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  user =new User();
  constructor(private config: ConfigService) {}

  ngOnInit() {}

  public onSubmit() {
    if(this.user){
      this.config.login(this.user?.username,this.user?.password);
    }
  }
}
