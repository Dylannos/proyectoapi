export type nationality = 'Británico' | 'Japonesa' | 'Mexicano' | 'Estadounidense' | 'Canadiense' | 'Irlandés' | 'Barbadense'

export enum Nationality {
    Británico = 'Británico',
    Japonesa = 'Japonesa',
    Mexicano = 'Mexicano',
    Estadounidense = 'Estadounidense',
    Canadiense = 'Canadiense',
    Irlandés = 'Irlandés',
    Barbadense = 'Barbadense'
}

export interface MovieEntry {
    id: number;
    movieName: string;
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
        
    };
    synopsis: string;
    realeaseYear: number;
}

export interface NewMovieEntry {
    movieName: string;
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
        
    };
    synopsis: string;
    realeaseYear: number;
}

export type NonSensitiveInfoMovieEntry = Omit<MovieEntry, 'nationality' >

// export type NewMovieEntry = Omit<MovieEntry,'id'>
 

