import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';
import { IMovie } from '../interfaces/MovieInterface';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [ CinemaService ]
})
export class MyMovieComponentComponent implements OnInit {

  constructor(public service:CinemaService, private route: ActivatedRoute) { }

  movieId:number;
  movie:IMovie;


  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movie = this.service.getMovie(this.movieId);
  }



}
