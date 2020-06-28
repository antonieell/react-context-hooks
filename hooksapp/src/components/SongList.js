import React, { useState } from "react";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Balão", id: 1 },
    { title: "Memento Mori", id: 2 },
    { title: "Non ducor duco", id: 3 },
  ]);

  const addSong = () => {
    setSongs([...songs, { title: "new Song", id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
