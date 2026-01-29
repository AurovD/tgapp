export type PendingState = {
    step: "Pending"
}

export type ReleasedState = {
    step: "Released"
}


export type Types = {
    MOVIE: "MOVIE",
    GAME: "GAME",
    ONLINE_MOVIE: "ONLINE_MOVIE",
    BOOK: "BOOK",
    EVENT: "EVENT",
}

export type Platform = {
    name: string;
    link: string;
    logo: string;
}


export type Item = {
    releaseDate: string;
    description: string;
    type: keyof Types;
    status: ReleasedState | PendingState;
    platforms: Platform[];
    images: string[];
}

export type User = {
    id: number;
    first_name: string;
    username: string;
}