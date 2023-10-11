import { NewMovieEntry, nationality,Nationality } from "./type"

const parseActors = (actorsFromRequest:any): string => {
    if(!isString(actorsFromRequest)) {
        throw new Error('Incorrect or missing actors')
    }
    return actorsFromRequest
}

const isNationality = (param: any): boolean => {
    return Object.values(Nationality).includes(param)
}

const isString = (string: string): boolean =>{
     return typeof string === 'string' 
}

const parseMovieName = (movieNameFromRequest:any): string=> {
    if(!isString(movieNameFromRequest) || isString(movieNameFromRequest)){
        throw new Error('Incorrect or missing MovieName')
    }
    return movieNameFromRequest
}




const toNewMovieEntry = (object:any): NewMovieEntry => {
    const newEntry: NewMovieEntry = {
        movieName: parseMovieName(object.movieName),
        actors: parseActors(object.actors)

    }
    return newEntry
}

export default toNewMovieEntry