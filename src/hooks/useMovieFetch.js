// Hooks
import { useState, useEffect } from "react";
// API
import API from "../API";

export function useMovieFetch(movieId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get 'directors'
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    }

    fetchMovie();
  }, [movieId]);

  // Write to sessionStorage

  return { state, loading, error };
}
