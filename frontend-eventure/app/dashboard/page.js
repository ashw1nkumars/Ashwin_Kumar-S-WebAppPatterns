import PersonalEvents from '@/components/PersonalEvents'
import ExistingEvents from '@/components/ExistingEvents'
import EventList from '@/components/EventList'
import TitleLogo from '@/components/TitleNav'
import React from 'react'

function page() {
  return (
    <main className="w-screen pt-10 px-10 flex flex-col gap-10">
        <ExistingEvents />
        <PersonalEvents />
    </main>
  )
}

export default page