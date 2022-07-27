import { Profile } from "components/Profile/Profile";
import user from "../dataFiles/user.json"
import { Statistics } from "components/Statistics/Statistics"
import data from "../dataFiles/data.json"



export const App = () => {
  return (
    <div>
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
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
