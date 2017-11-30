import { Injectable } from '@angular/core';
import { movies } from '../../sample-movies';
import { IMovie } from '../interfaces/MovieInterface';



@Injectable()
export class CinemaService {
  movies:Array<IMovie> = movies;
  constructor() { }

  addFilm(film){
    this.movies.push(film);
  }
  getMovies(){
    return this.movies;
  }
  getMovie(id){
    for(let i = 0; i < this.movies.length; i++){
      if(this.movies[i].id == id) return this.movies[i];
    }
  }
}
