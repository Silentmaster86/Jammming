import React, { useState } from "react";
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import { Spotify } from "../../util/Spotify/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name 1",
      artist: "Example Track Artist 1",
      album: "Example Track Album 1",
      id: 1,
    },
  ]);
  const [playlistName, setPlaylistName] = useState("Example Playlist Name");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name 1",
      artist: "Example Playlist Artist 1",
      album: "Example Playlist Album 1",
      id: 11,
    },
  ]);

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log("Track already exists");
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }

  function search(term) {
    Spotify.search(term).then((result) => setSearchResults(result));
    console.log(term);
  }

  return (
    <div>
      <h1>
        <span className={styles.highlight}>Jammming</span>
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar onSearch={search} />

        <div className={styles["App-playlist"]}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults userSearchResults={searchResults} onAdd={addTrack} />
          {/* passing searchResults state to the SearchResults component as userSearchResults */}

          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
          {/* passing playlistName & playlistTracks states to the Playlist component as userSearchResults */}
        </div>
      </div>
    </div>
  );
}

export default App;