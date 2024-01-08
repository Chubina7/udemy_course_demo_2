import EventList from "@/components/events/event-list/EventList";
import EventsSearch from "@/components/events/events-search/EventsSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
