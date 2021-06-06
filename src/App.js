import Video from "./Video";
import React from "react";
import ReactDOM from "react-dom";
import SearchArea from "./SearchArea";

const App = () => {
  return (
    <div>
      <header>
        <a href="/">BruhTube</a>
      </header>
      <SearchArea/>
      <Video
        title="The Best Video"
        dateAdded="2 days ago"
        channel="News Channel"
      />

      <Video
        title="The Cool Video"
        dateAdded="4 days ago"
        channel="Local Channel"
      />

      <Video
        title="The Learning Video"
        dateAdded="6 days ago"
        channel="Learning Channel"
      />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
