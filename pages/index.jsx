import EventList from "@/components/events/event-list/EventList";
import { getFeaturedEvents } from "@/helpers/api-util";
import React from "react";

export default function Home({ featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
  };
}
