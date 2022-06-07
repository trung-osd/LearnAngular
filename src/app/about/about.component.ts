import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public myNumber = 0;
  public myBinhPhuong = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.myNumber = this.common.counter;
    this.myBinhPhuong = this.common.binhPhuong(this.myNumber);
    this.common.counter++;
  }

}
