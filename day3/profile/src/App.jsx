import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";


const App = () => {
  return (
    <ProfileCard profileImage="/2image.jpg"
    name="Praveen Kumar"
    title="Full Stack Developer"
    description="Passionate about building scalable web applications and exploring new technologies."
    onButtonClick={() => alert("Followed!")}
    />
  );
};

export default App;
