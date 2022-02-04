import {action, makeObservable, observable} from "mobx";

// action = 함수, 함수 안에서 observable을 바꿀때 action을 사용
// observable = 계속 옵저버 하고있음 , observable이 변경이 되면 이것에 따라 refresh

class Movie {
    id;
    title;
    rate;

    constructor(id, title, rate) {
        this.id = id;
        this.title = title;
        this.rate = rate;
    }
}

// MovieStore은 Movie의 Repository라고 생각하면됨
export class MovieStore {
    rootStore;

    movies = [];

    constructor(root) {
        makeObservable(this, {
            movies: observable,
            createMovie: action,
            deleteMovie: action,
            changeRate: action,
        })

        this.rootStore = root;

        this.movies = [
            new Movie(1, 'LOTR', 5),
            new Movie(2, 'Harry Potter', 4),
            new Movie(3, '창궐', 0),
        ]
    }

    createMovie(title, rate) {
        this.movies = [
            ...this.movies,
            new Movie(this.movies[this.movies.length - 1].id + 1, title, rate),
        ]
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(x => x.id !== id);
    }

    changeRate(id, rate){
        const idx = this.movies.findIndex(x => x.id === id);
        const movie = this.movies[idx];

        this.movies = [
            ...this.movies.slice(0, idx),
            new Movie(movie.id, movie.title, rate),
            ...this.movies.slice(idx + 1, this.movies.length),
        ]
    }
}