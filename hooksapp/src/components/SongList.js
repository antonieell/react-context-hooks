import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Balão", id: 1 },
    { title: "Memento Mori", id: 2 },
    { title: "Non ducor duco", id: 3 },
  ]);

  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((value) => (
          <li key={value.id}>{value.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong}></NewSongForm>
      <label>{age}</label>
      <button onClick={() => setAge(age + 1)}>Add 1 to age</button>
    </div>
  );
};

export default SongList;
