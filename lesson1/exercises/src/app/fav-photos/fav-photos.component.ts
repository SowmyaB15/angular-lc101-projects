import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fun Outdoor Activities!!!';
  image1 = 'https://i.pinimg.com/originals/9c/a7/bb/9ca7bb5c0a545987f5554ba7754d49ee.jpg';
  image2 = 'https://westportmoms.com/wp-content/uploads/sites/47/2017/09/fun_outdoor_kids_activities_1-1.jpg';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPVZOWR0EBnKvWvIfe03cXDDHxdt5aL4WGuw&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}