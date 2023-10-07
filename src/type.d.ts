export type nationality = 'Británico' | 'Japonesa' | 'Mexicano' | 'Estadounidense' | 'Canadiense' | 'irlandés' | 'Barbadense'

export interface MovieEntry {
    id: number;
    moviename: string;
    actors: {
        firstName: string;
        lastName: string;
        nationality: nationality;
        image: string;
        birthday: string;
    }[];
    directors: {
        firstName: string;
        lastName: string;
        nationality: nationality;
        image: string;
        birthday: string;
    }[];
    image: {
        ...;
    };
    synopsis: string;
    realeaseYear: number;
}[]
