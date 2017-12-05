import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  loading = false;

  constructor( _dataService: DataService) { 
    this.loading = true;
    _dataService.loadData().subscribe( 
      (data) =>  this.data = data,
      err => console.error('error'),
      () => this.loading = false
    );
  }

  ngOnInit() {
  }

}
