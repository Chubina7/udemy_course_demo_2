import EventContent from "@/components/eventContent/event-content";
import EventLogistics from "@/components/eventLogistics/event-logistics";
import EventSummary from "@/components/eventSummary/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function EventDetailsPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventDetails);

  if (!event) {
    return <p>No event found</p>;
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
