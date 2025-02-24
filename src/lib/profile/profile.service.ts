import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  getData() {
    return [1, 2, 3, 4]
  }
}
