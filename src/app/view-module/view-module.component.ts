import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-module',
  templateUrl: './view-module.component.html',
  styleUrls: ['./view-module.component.css']
})
export class ViewModuleComponent implements OnInit {

  constructor(private service : RegService, private router : Router) { }

  ngOnInit(): void {
  }

  addCandidate(){
    this.router.navigate(['/addCandidate']);
  }

  viewCandidate()
  {
    this.router.navigate(['/viewCandidate']);
  }

}
