import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <div className="card">
        <ProfilePhoto></ProfilePhoto>
        <div className="user-infos">
          <FullName></FullName>
          <Address></Address>
        </div>
      </div>
    </div>
  );
}

export default App;
