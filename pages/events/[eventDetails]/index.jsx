import EventContent from "@/components/events/eventContent/event-content";
import EventLogistics from "@/components/events/eventLogistics/event-logistics";
import EventSummary from "@/components/events/eventSummary/event-summary";
import { getFeaturedEvents, getEventById } from "@/helpers/api-util";
import Head from "next/head";
import React from "react";

export default function EventDetailsPage({ event, hasError }) {
  if (hasError) {
    return (
      <div className="center">
        <h1>You requested invalid page</h1>
      </div>
    );
  }
  if (!event) {
    return (
      <div className="center">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {event && (
        <>
          <Head>
            <title>{event.title}</title>
            <meta name="description" content={event.description} />
          </Head>
          <EventSummary title={event.title} />
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
          />
          <EventContent>
            <p>{event.description}</p>
          </EventContent>
        </>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventDetails;
  const event = await getEventById(eventId);
  if (!event) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: { event },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();

  const pathts = allEvents.map((event) => ({
    params: { eventDetails: event.id },
  }));
  return {
    paths: pathts,
    fallback: true,
  };
}
