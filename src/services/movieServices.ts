import movieInfo from './movie.json'
import { MovieEntry, NewMovieEntry, NonSensitiveInfoMovieEntry } from '../type';

const movies: MovieEntry[] = movieInfo as MovieEntry[]

export const getEntries = (): MovieEntry[] => movies

export const findById = (id:number): MovieEntry | undefined => {
    const entry = movies.find(d => d.id === id )
    return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoMovieEntry[] => movies

export const addMovie = (newMovieEntry: NewMovieEntry): MovieEntry => {
    const newMovie = {
        id: Math.max(...movies.map(d => d.id))+1,
        ...newMovieEntry
       
    }
    movies.push(newMovie)
    return newMovie
}


