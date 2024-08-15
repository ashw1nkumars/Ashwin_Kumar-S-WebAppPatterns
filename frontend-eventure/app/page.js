import EventList from "@/components/EventList";
import TitleLogo from "@/components/TitleNav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen px-10 flex flex-col gap-10">
        <EventList />
    </main>
  );
}