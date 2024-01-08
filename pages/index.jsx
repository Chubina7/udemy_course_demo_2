import EventList from "@/components/events/event-list/EventList";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
