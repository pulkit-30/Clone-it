import React from "react";
import Row from "./Row";
import Request from "../request";
function MainComponent() {
  return (
    <div className="Main">
      <Row title="Netflix Originals" fetchUrl={Request.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={Request.fetchtrending} />
      <Row title="Recommended" fetchUrl={Request.fetchRecommndation} />
      <Row title="Top Rated Movies" fetchUrl={Request.fetchTopRated} />
      <Row title="TV Shows" fetchUrl={Request.fetchTV} />
      <Row title="Top Rated TV Shows" fetchUrl={Request.fetchTvTopRated} />
      <Row title="Discover" fetchUrl={Request.fetchDiscover} />
    </div>
  );
}

export default MainComponent;
