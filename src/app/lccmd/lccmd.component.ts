import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';
@Component({
  selector: 'app-lccmd',
  templateUrl: './lccmd.component.html',
  styleUrls: ['./lccmd.component.css']
})
export class LCcmdComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onback(){
    this.router.navigate(['/SaveComponent'])
  }
  onclick(){
    this.router.navigate(['/ApproveComponent'])
  }
}
