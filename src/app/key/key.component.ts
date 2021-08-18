import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';
@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 onback(){
 this.router.navigate(['/ChangeComponent'])
 }
 onclick(){
  this.router.navigate(['/FinishComponent'])
 }
}
