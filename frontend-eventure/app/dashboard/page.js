import MyEvents from '@/components/dashboard/MyEvents'
import RegisteredEvents from '@/components/dashboard/RegisteredEvents'
import EventsBoard from '@/components/home/EventsBoard'
import TitleLogo from '@/components/home/TitleLogo'
import React from 'react'

function page() {
  return (
    <main className="w-screen pt-10 px-10 flex flex-col gap-10">
        <RegisteredEvents />
        <MyEvents />
    </main>
  )
}

export default page