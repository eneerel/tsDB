import { Request, Response } from "express";
import movie from "../models/ movie";

const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await movie.find({}).limit(10);
    res.status(200).json({ success: true, movies });
  } catch (error) {
    console.log("ERROR", error);
  }
};
export { getMovies };
