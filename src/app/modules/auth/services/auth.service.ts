import { Injectable, OnDestroy } from '@angular/core';
import { DataService} from "../../../data.service";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  get_user(){
    return localStorage.getItem('user_id');
  }

  get_token(){
    return localStorage.getItem('token');
  }

  set_user(token: string,user_id: string){
    localStorage.setItem('token', token);
    localStorage.setItem('user_id',user_id);
    return true;
  }


  ngOnDestroy() {
    console.log('test')
  }
}
