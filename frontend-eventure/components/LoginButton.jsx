"use client"

import {useUser} from "@auth0/nextjs-auth0/client";
import Image from "next/image";


function LoginButton() {
  const {user,error,isLoading} = useUser();
    if(isLoading) return <div>Loading...</div>

    if(error) return <div>{error.message}</div>

    if(user) return <div className="btn bg-transparent flex gap justify-between">
        <a href="/api/auth/logout" >Logout</a>
        <Image className="rounded-full" width={40} height={40} src={`${user?.picture}`} alt={'User Profile pic'} />
    </div>

  else return (
      <div>
        <a href="/api/auth/login" className="btn btn-primary">Login</a>
      </div>
  );
}

export default LoginButton;