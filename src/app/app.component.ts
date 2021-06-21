import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title :string= 'DemoBankApp';
  
  constructor(private helloService:HelloService){

  }
  ngOnInit(): void {
  this.helloService.getRes().subscribe(response=>{
    console.log("service response called"+response);
   this.title=response;
    console.log("service called")
  });
  }
}
