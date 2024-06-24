import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';
  value1:boolean=true;
  value2:boolean=false;
  array=['hi','hello','hihello'];
  ngstylestatus=true;
  val=3;
  CopyText:any;

  getcolor(){
   
  }


}
