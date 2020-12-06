import { Component, OnInit } from '@angular/core';
import { BreedsListService } from './breeds-list.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss'],
  providers: [BreedsListService]
})
export class BreedsListComponent implements OnInit {
  breedsList: Array<string> = [];
  public imageUrl = '';
  activeIndex = 0;
  isLoading = false;
  constructor(
    private breedsListService: BreedsListService
  ) { }

  ngOnInit(): void {
    this.getBreedsList();
  }

  getBreedsList() {
    this.isLoading = true;
    this.breedsListService.getBreedsList().subscribe((res: any) => {
      this.breedsList = Object.keys(res.message);
      this.getImages(this.breedsList[0], 0);
    });
  }

  getImages(breed, index) {
    this.isLoading = true;
    this.activeIndex = index;
    this.breedsListService.getImage(breed).subscribe((res: any) => {
      this.isLoading = false;
      this.imageUrl = res.message;
    });
  }
}
