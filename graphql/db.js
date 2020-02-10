export let movies = [
  {
    id: 0,
    name: "Bruce Lee",
    score: 27
  },
  {
    id: 1,
    name: "Bruce Lee2",
    score: 127
  },
  {
    id: 2,
    name: "Bruce Lee3",
    score: 227
  },
  {
    id: 3,
    name: "Bruce Lee4",
    score: 327
  }
];

export const getMovies = () => movies;
export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovies = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
