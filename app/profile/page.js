import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

export const metadata = {
    title: 'Profile Page',
    description: 'This is the profile page where you can view your details.',
  };

export default async function Profile() {
    const {isAuthenticated, getUser} = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();
    // console.log(user.email);

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
    return null;
  }

  return (
    <div className="my-6">
      <p>Hello, {user.given_name} {user.family_name}</p>
      <p className="text-2xl font-semibold mt-2">Welcome to your profile!</p>
    </div>
  );
}
