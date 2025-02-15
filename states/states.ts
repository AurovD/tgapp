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
}

export type Item = {
    releaseDate: Date;
    description: string;
    type: Types;
    status: ReleasedState | PendingState;
}


export type User = {
    _id: string;
    login: string;
}