import { Component, OnInit } from '@angular/core';
import { Router , RouterModule } from '@angular/router';
@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onback(){
    this.router.navigate(['/ApproveComponent'])
  }
  onclick(){
  this.router.navigate(['/KeyComponent'])
  }
}
