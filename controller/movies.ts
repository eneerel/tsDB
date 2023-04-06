import { Request, Response } from "express";
import movie from "../models/ movie";

const getMovies = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 0;
    const total = await movie.countDocuments();
    const pageCount = Math.ceil(total / limit);
    const skip = (page + 1) * limit;
    console.log("Total", pageCount);
    console.log("Skip", skip);
    const movies = await movie.find({}).skip(skip).limit(Number(limit));
    res
      .status(200)
      .json({ success: true, movies, pagination: { total, pageCount, page } });
  } catch (error) {
    console.log("ERROR", error);
  }
};
const getMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const movie1 = await movie.findById({ id });
    res.status(200).json({ success: true, movie1 });
  } catch (error) {
    console.log("ERROR", error);
  }
};
export { getMovies, getMovie };
