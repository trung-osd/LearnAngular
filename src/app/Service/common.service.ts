import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public myNumber = 0;
  public counter = 0;

  constructor() { }

  public binhPhuong(n: number): number {
    return n * n;
  }

  public submitData(data: any): void {
    console.log('send data to server', data);
  }
}
