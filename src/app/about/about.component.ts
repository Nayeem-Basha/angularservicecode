import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

user: User[]=[];

  constructor(private testserv : TestService) { }

  ngOnInit(): void {
    alert(this.testserv.gettodaysdate());
  }
  printdata(){
    alert(this.testserv.getMyName());
  }

  getalluserinformation(){
    this.testserv.getallusers().subscribe(user=>{
      this.user=user;
    });
  }

}
