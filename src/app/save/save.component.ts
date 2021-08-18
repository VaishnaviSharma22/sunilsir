import { Component, OnInit } from '@angular/core';
import { Router ,RouterModule } from '@angular/router';
@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
  onback(){
    this.router.navigate(['/DownloadComponent'])
  }
  onclick(){
    this.router.navigate(['/LCcmdComponent'])
  }
}
