import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Service/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    const payload = {
        "username": "trung2",
        "password": "Str1trung",
        "confirmPassword": "Str1trung",
        "firstName": "Trung",
        "lastName": "Phan Van",
        "email": "trung2@gmail.com",
        "dateOfBirth": "19/4/2000",
        "gender": "Nam",
        "phone": "",
        "avatar": ""
      };
    this.httpServerService.register(payload).subscribe(data => {
      console.log('register', data);
    });
  }

}
