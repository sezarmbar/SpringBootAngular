import { Component } from '@angular/core';
import { DataService } from "./data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title;
  constructor(public dataservice:DataService){}
  ngOnInit(){
    this.getData()
  }
  getData(){
    this.dataservice.getData().subscribe(data =>this.title = data)
  }


}
