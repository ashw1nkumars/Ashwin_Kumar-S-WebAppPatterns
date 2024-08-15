"use client"
import EventList from "@/components/EventList";
import TitleLogo from "@/components/TitleNav";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      // Fetch registered events from the API
      axios.get('http://localhost:8080/events')
          .then(response => {
              setEvents(response.data); // Assuming the API response is an array of events
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching events:', error);
              setError('Failed to load events');
              setLoading(false);
          });
  }, []);

  if (loading) {
      return <div>Loading events...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }
  return (
    <main className="w-screen px-10 flex flex-col gap-10">
        <EventList data={events} />
    </main>
  );
}