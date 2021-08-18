import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onclick(){
    this.router.navigate(['/SaveComponent'])
  }
  onback(){
    this.router.navigate(['/SelectOSComponent'])
  }

}
