export const { REACT_APP_PROTOCOL, REACT_APP_API, REACT_APP_MOCKS } =
  process.env;
const URL = REACT_APP_PROTOCOL ?? "http://" + REACT_APP_API + "localhost:4000";
export default URL;
