import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Profile;
  loggedIn:boolean = false;
  loadSideBar = new Subject();

  constructor() {
      this.addtempData();
   }

  getUserData(){
    return this.user;
  }

  setLogOut(){
    this.loggedIn = false;
    this.loadSideBar.next(false);
  }

  setLogIn(){
    this.loggedIn = true;
    this.loadSideBar.next(true);
  }

  isAuthanticated(){
    return this.loggedIn;
  }

  getMobileNumber(){
    return this.user.mobilenumber;
  }

  getEnrollId(){
    return this.user.enrollNo;
  }

  getName(){
    return this.user.name;
  }

  photoEdit(url:string){
    //console.log(url);
    this.user.imgUrl = url;
  }

  addtempData(){
    let temp:Profile = {
        enrollNo : 'MT2019033',
        name : 'Dhameliya Vatsalkumar',
        imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKNkizjthbhD4ZCYksTcTYHSyPeWNLI_IKKxEga6sZMDBf7hVJ&usqp=CAU',
        roomNo : 'B-479',
        gender : 'Male',
        mobilenumber : '9537517274'
    };
    this.user = temp;
  }
}
