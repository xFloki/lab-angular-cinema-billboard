import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service'
import { IMovie } from '../interfaces/MovieInterface';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [ CinemaService ]
})
export class MyHomeComponentComponent implements OnInit {

  movies:Array<IMovie>
  constructor(public service:CinemaService) { }

  ngOnInit() {
    this.movies = (this.service.getMovies());
    console.log('WTF')
    console.log('GG',this.movies)
  }



}
