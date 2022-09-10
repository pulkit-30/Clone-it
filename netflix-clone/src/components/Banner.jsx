import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
function Banner() {
  const [movies, UpdateMovies] = useState({});

  //   const baseImageUrl = "https://image.tmdb.org/t/p/w500";
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=4a6fd5c43b94e7c2b26f73a1ddf3438a&with_networks=213/discover/tv?api_key=4a6fd5c43b94e7c2b26f73a1ddf3438a&with_networks=213"
      );
      const Random = Math.floor(Math.random() * 20);
      UpdateMovies(request.data.results[Random]);

      return request;
    }
    fetchData();
  }, []);

  return (
    <div
      className="Banner flex"
      style={{
        backgroundImage: `url(${baseUrl}${movies?.backdrop_path})`,
      }}
    >
      <div className="banner_content">
        {" "}
        <div className="title">{movies.original_name}</div>
        <div className="btn">
          <Button variant="contained" color="secondary">
            Play
          </Button>
          &nbsp;
          <Button variant="contained" color="primary">
            My List
          </Button>
        </div>
        <div className="overview">{movies.overview}</div>
      </div>
    </div>
  );
}

export default Banner;
