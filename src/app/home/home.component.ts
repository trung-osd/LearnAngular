import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Trung';
  public age = 22;
  public fruits = ['Cam', "Quýt", "Mận", "Ổi", "Đào"]

  public fruitsObj = [
    {name: 'Táo', price: 10, sale: true},
    {name: 'Quýt', price: 11, sale: false},
    {name: 'Mận', price: 12, sale: true},
    {name: 'Ổi', price: 13, sale: false},
    {name: 'Đào', price: 14, sale: true},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public resetName():void {
    console.log('reset name')
  }
}
