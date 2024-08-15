"use client"

import PersonalEvents from '@/components/PersonalEvents'
import ExistingEvents from '@/components/ExistingEvents'
import EventList from '@/components/EventList'
import TitleLogo from '@/components/TitleNav'

import {useUser} from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from 'react';
import axios from 'axios'

function page() {
  const [response, setResponse] = useState(null);

  const {user} = useUser();

  const [userState, setUserState] = useState([user]);



  useEffect(() => {

    axios.post('http://localhost:8080/events/user-events', {email: "test@email.com"}).then(res => {
      setResponse(res);
    }
    ).catch(error => {
      console.error('Error fetching events:', error);
    }
    );
  }, [user]);

  
  return (
    <main className="w-screen pt-10 px-10 flex flex-col gap-10">
        <ExistingEvents data={response?.data?.createdEvents} />
        <PersonalEvents data={response?.data?.participatingEvents}/>
    </main>
  )
}

export default page