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

  public cities = [
    {city: 'Chọn thành phố', district: ['Quận huyện']},
    {city: 'Dak Nong', district: ['Dak Mil', 'Krong No', 'Gia Nghia', 'Tuy Duc']},
    {city: 'TP HCM', district: ['Quan 1', 'Quan 5', 'Quan 3', 'Quan 4']},
  ]

  public districts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('cities =' , this.cities)
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    if(!city) {
      return;
    }

    //cách 1
    // const search = this.cities.filter(data => data.city === city);
    // if(search && search.length > 0) {
    //   this.districs = search[0].distric;
    // }

    //cách 2
    this.districts = this.cities.find(data => data.city === city)?.district || [];
  }
}
