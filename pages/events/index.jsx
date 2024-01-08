import EventList from "@/components/events/event-list/EventList";
import { getAllEvents } from "@/dummy-data";
import React from "react";

export default function AllEventsPage() {
  const events = getAllEvents();

  return <EventList items={events} />;
}
