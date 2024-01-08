import EventContent from "@/components/events/eventContent/event-content";
import EventLogistics from "@/components/events/eventLogistics/event-logistics";
import EventSummary from "@/components/events/eventSummary/event-summary";
import ErrorAlert from "@/components/ui/errorAlert/error-alert";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function EventDetailsPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventDetails);

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
