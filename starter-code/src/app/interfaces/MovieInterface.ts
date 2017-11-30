export interface IMovie {
  id: number ,
  title: string,
  poster: string,
  synopsis: string,
  genres: Array<string>,
  year: number,
  director: string,
  actors: Array<string>,
  hours: Array<string>,
  room: number
}
