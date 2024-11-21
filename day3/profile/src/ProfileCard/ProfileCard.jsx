import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profileImage, name, title, description, onButtonClick }) => {
  return (
    <div className="profile-card">
      <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      <p className="profile-description">{description}</p>
      <button className="profile-button" onClick={onButtonClick}>
        Follow
      </button>
    </div>
  );
};

export default ProfileCard;
