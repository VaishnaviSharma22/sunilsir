import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';
@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onback(){
    this.router.navigate(['/KeyComponent'])
  }
  done(){
    this.router.navigate(['/SelectOSComponent'])
  }

}
