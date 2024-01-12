import EventList from "@/components/events/event-list/EventList";
import ResultsTitle from "@/components/events/result/results-title";
import Button from "@/components/ui/button/Button";
import ErrorAlert from "@/components/ui/errorAlert/error-alert";
import { getFilteredEvents } from "@/helpers/api-util";
import React from "react";

export default function FilteredEventsPage({ hasError, events, dateProp }) {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Inavlid fillter. Please adjust correct ones!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents) {
    return <h1 className="center">Loading...</h1>;
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found! Check another date</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(dateProp.year, dateProp.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </div>
  );
}

// Get static props

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      dateProp: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
