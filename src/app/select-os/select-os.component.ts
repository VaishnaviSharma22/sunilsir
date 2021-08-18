import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';

@Component({
  selector: 'app-select-os',
  templateUrl: './select-os.component.html',
  styleUrls: ['./select-os.component.css']
})
export class SelectOSComponent implements OnInit {

  constructor( private router :Router) { }

  ngOnInit(): void {
  }
  onclick(){
    this.router.navigate(['/DownloadComponent'])
  }
}
