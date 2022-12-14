import { useState } from "react";
import View from "../components/View";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <View>
      <h1>{room ? "Join" : "Create"} a room</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="welcome"
        value={name}
        autoFocus
        onChange={({ target }) => setName(target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter a room code"
        className="welcome"
        value={room}
        onChange={({ target }) => setRoom(target.value)}
      />
      <input
        type="button"
        value="Play"
        className="welcome"
        onClick={() => {
          // sign in
          // join/create room
          // navigate to room
        }}
      />
    </View>
  );
};

export default Join;
