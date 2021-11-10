import { Component, OnInit } from '@angular/core';
import {ListaClimas,Climas} from '../../interfaces/climas';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  clima:any;
  
  
  
  ngOnInit(): void {
    
  }

}
