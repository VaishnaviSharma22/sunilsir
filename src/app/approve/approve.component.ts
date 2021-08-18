import { Component, OnInit } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  onback(){
    this.router.navigate(['/LCcmdComponent'])
  }
  onclick(){
    this.router.navigate(['/ChangeComponent'])
  }

}
