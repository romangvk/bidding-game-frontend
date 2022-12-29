import { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "../components/View";
import { signIn, refreshToken } from "../services/auth";
import { createRoom, joinRoom } from "../services/functions";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();
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
        onClick={async () => {
          try {
            // sign in
            await signIn();
            // join/create room
            const { data: roomCode } = await (room
              ? joinRoom({
                  name,
                  room: room,
                })
              : createRoom(name));
            // refresh token
            await refreshToken();
            // navigate to room
            navigate(`/${roomCode}`);
          } catch (error) {
            console.log(error);
          }
        }}
      />
    </View>
  );
};

export default Join;
