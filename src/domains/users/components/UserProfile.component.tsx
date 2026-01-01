import { User } from "../user.type";
import { useUserStore } from "../user.store";
import { useEffect } from "react";

export const UserProfile = () => {
  const user: User | null = useUserStore((s) => s.user);

  useEffect(() => {
    console.log("UserProfile -> Rendering UserProfile Component");
  }, [user]);

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </div>
  );
};
