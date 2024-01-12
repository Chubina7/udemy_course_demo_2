import EventList from "@/components/events/event-list/EventList";
import EventsSearch from "@/components/events/events-search/EventsSearch";
import { getAllEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import React from "react";

export default function AllEventsPage({ events }) {
  const router = useRouter();

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

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: { events: allEvents },
    revalidate: 1800,
  };
}
