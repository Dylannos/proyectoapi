import movieInfo from './movie.json'
import { MovieEntry } from '../type';

const movies: Array<MovieEntry> = movieInfo as Array<MovieEntry>

export const getEntries = () => movies

export const addEntry = () => null
