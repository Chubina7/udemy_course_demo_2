import EventItem from "@/components/events/event-item/EventItem";
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
    <div>
      {event && (
        <EventItem
          date={event.date}
          id={event.id}
          image={event.image}
          location={event.location}
          title={event.title}
          key={event.id}
        />
      )}
    </div>
  );
}
