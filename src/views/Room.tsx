import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import View from "../components/View";
import { database } from "../firebase/init";
import { increment } from "../services/functions";

const Room = () => {
  const { room } = useParams();
  const [lobby, setLobby] = useState<{
    players: { [uid: string]: { name: string; order: number } };
  }>();
  const [game, setGame] = useState<{ data: number }>();
  console.log(lobby);

  const navigate = useNavigate();

  useEffect(() => {
    const query = ref(database, `lobbies/${room}`);
    return onValue(
      query,
      (snapshot) => {
        if (snapshot.exists()) {
          setLobby(snapshot.val());
        }
      },
      (error) => {
        console.error(error.message);
        navigate("/");
      }
    );
  }, [room, navigate]);

  useEffect(() => {
    const query = ref(database, `games/${room}`);
    return onValue(
      query,
      (snapshot) => {
        if (snapshot.exists()) {
          setGame(snapshot.val());
        }
      },
      (error) => {
        console.error(error.message);
      }
    );
  }, [room]);

  return (
    <View>
      <h1>{room}</h1>
      <input
        type="button"
        value={game ? game.data : "Start Game"}
        onClick={() => increment()}
      />
      <div style={{ display: "flex", gap: "1em", flexWrap: "wrap" }}>
        {lobby
          ? Object.entries(lobby.players).map(([uid, player], i) => (
              <h3 key={uid}>
                {player.name} {player.order}
              </h3>
            ))
          : "Loading..."}
      </div>
    </View>
  );
};

export default Room;
