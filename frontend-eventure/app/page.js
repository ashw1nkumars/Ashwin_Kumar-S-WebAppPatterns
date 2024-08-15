import EventsBoard from "@/components/home/EventsBoard";
import TitleLogo from "@/components/home/TitleLogo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen px-10 flex flex-col gap-10">
        <EventsBoard />
    </main>
  );
}