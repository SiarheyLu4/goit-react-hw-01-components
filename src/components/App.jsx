import { Profile } from "components/Profile/Profile";
import user from "../dataFiles/user.json"



export const App = () => {
  return (
    <Profile
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};
