import { useParams } from "react-router-dom";
function Profile() {
  const { userId } = useParams();

  return (
    <>
      <h1>Profile Page</h1>
      <p>User ID: {userId}</p>
    </>
  );
}

export default Profile;
