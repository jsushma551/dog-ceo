import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BreedsListService {

  constructor(
    private htppClient: HttpClient
  ) { }

  getBreedsList() {
    return this.htppClient.get('https://dog.ceo/api/breeds/list/all');
  }

  getImage(name) {
    return this.htppClient.get(`https://dog.ceo/api/breed/${name}/images/random`);
  }
}
