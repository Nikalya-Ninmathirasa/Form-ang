import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  dataobject:any={};
  getdata(data:NgForm){
    this.dataobject=data;
  }
  

  show=false;

  click(){
    this.show=!this.show;  // this.show 1st false then click true then false then true
  }
}
