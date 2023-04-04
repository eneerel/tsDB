import { Schema, model } from "mongoose";

interface IMovie {
  plot: string;
  genres: [string];
  runtime: Number;
  rated: "NOT RATED" | "RATED";
  cast: [string];
  poster: string;
  title: string;
  fullplot: string;
  languages: [string | Date];
  directors: [string];
  writers: [string];
  released: Date;
  awards: {
    wins: number;
    nominations: number;
    text: number | string;
  };
  lastupdated: Date;
  year: Date;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: [string];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    dvd: Date;
    production: string;
    lastUpdated: Date;
  };
  num_mflix_comments: number;
}

const movieSchema = new Schema<IMovie>({});

const movie = model("Movie", movieSchema);

export default movie;
