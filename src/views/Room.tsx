import { useParams } from "react-router-dom";
import View from "../components/View";

const Room = () => {
  const { room } = useParams();
  return <View>{room}</View>;
};

export default Room;
