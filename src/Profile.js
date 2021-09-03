import React from "react";

const profileData = {
  jung: {
    name: "jung",
    description: "whitehand",
  },
  lee: {
    name: "lee",
    description: "킹작인",
  },
};
function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div className="notExist">존재하지 않는 사용자</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
