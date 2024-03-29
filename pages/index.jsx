import Head from "next/head";
import EventList from "@/components/events/event-list/EventList";
import { getFeaturedEvents } from "@/helpers/api-util";
import React from "react";

export default function Home({ featuredEvents }) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great new events here that allow you to evolve..."
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}
