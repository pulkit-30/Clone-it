import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row(props) {
  const [movies, UpdateMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      UpdateMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  return (
    <div className="">
      <h4>{props.title}</h4>
      <div className="flex row">
        {movies.map((movie) => {
          return (
            <div className="poster" key={movie.id}>
              <img
                onClick={() => {
                  if (trailerUrl) {
                    setTrailerUrl("");
                  } else {
                    props.title === "Netflix Originals" &&
                      movieTrailer(movie?.name)
                        .then((url) => {
                          console.log(url);
                          const urlParams = new URLSearchParams(
                            new URL(url).search
                          );

                          setTrailerUrl(urlParams.get("v"));
                        })
                        .catch((error) => {
                          console.log(error);
                          setTrailerUrl("7mFvyrNHZRY");
                        });
                  }
                }}
                src={`${baseImageUrl}${movie.poster_path}`}
                alt={movie.name}
              />
            </div>
          );
        })}
      </div>
      {trailerUrl && (
        <div className="youtube">
          <YouTube
            videoId={trailerUrl}
            opts={{
              width: "420",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Row;
