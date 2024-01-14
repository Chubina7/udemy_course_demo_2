import EventList from "@/components/events/event-list/EventList";
import EventsSearch from "@/components/events/events-search/EventsSearch";
import { getAllEvents } from "@/helpers/api-util";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function AllEventsPage({ events }) {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="All good events are here..." />
      </Head>
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
