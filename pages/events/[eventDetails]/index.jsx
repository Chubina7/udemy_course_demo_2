import EventContent from "@/components/events/eventContent/event-content";
import EventLogistics from "@/components/events/eventLogistics/event-logistics";
import EventSummary from "@/components/events/eventSummary/event-summary";
import ErrorAlert from "@/components/ui/errorAlert/error-alert";
import { getAllEvents, getEventById } from "@/helpers/api-util";
import React from "react";

export default function EventDetailsPage({ event }) {
  if (!event) {
    return (
      <ErrorAlert>
        <p className="center">No event found</p>
      </ErrorAlert>
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
  };
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents();

  const pathts = allEvents.map((event) => ({
    params: { eventDetails: event.id },
  }));
  return {
    paths: pathts,
    fallback: false,
  };
}
