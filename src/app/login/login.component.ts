import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accountDetails = {

    1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
    1002: { name: "user2", acno: 1002, pin: 1234, password: "usertwo", balance: 3000 },
    1003: { name: "user3", acno: 1003, pin: 1236, password: "userthree", balance: 3000 },
    1004: { name: "user4", acno: 1004, pin: 1543, password: "userfour", balance: 3000 },
    1005: { name: "user5", acno: 1005, pin: 4738, password: "userfive", balance: 3000 },
}
acno="";
pwd="";


  constructor() { }

  acnoChange(event){
    this.acno=event.target.value;
  }
  pwdChange(event){
    this.pwd=event.target.value;
  }

  ngOnInit(): void {
  }
  login(){
    var acno = this.acno;
        var password = this.pwd;
        //alert(acno + "," + password)
         var data = this.accountDetails;
        if (acno in data) {
            var pwd = data[acno].password
            if (pwd == password) {
                alert("sucessful login");
                window.location.href="home.html"
            }
            else {

                alert("incorrect username and password")
            }
        }
        else {
            alert("user does not exist")
        }
}
}