import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId, username } = useParams();

  return (
    <div>
      <h1>{username}</h1>
      <p>User ID {userId}</p>
    </div>
  );
}

export default UserProfile;
