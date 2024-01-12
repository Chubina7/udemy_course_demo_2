import EventContent from "@/components/events/eventContent/event-content";
import EventLogistics from "@/components/events/eventLogistics/event-logistics";
import EventSummary from "@/components/events/eventSummary/event-summary";
import { getFeaturedEvents, getEventById } from "@/helpers/api-util";
import React from "react";

export default function EventDetailsPage({ event }) {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {event && (
        <>
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
