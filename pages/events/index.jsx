import EventList from "@/components/events/event-list/EventList";
import EventsSearch from "@/components/events/events-search/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import React from "react";

export default function AllEventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
}
