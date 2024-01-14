import EventList from "@/components/events/event-list/EventList";
import ResultsTitle from "@/components/events/result/results-title";
import Button from "@/components/ui/button/Button";
import ErrorAlert from "@/components/ui/errorAlert/error-alert";
import { getFilteredEvents } from "@/helpers/api-util";
import Head from "next/head";
import React from "react";

export default function FilteredEventsPage({ hasError, events, dateProp }) {
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="descritpion"
        content={`All events for ${dateProp.month} / ${dateProp.year}`}
      />
    </Head>
  );

  const date = new Date(dateProp.year, dateProp.month - 1);

  if (hasError) {
    return (
      <>
        {pageHeadData}
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
    return (
      <>
        {pageHeadData}
        <h1 className="center">Loading...</h1>;
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <ErrorAlert>
          <p className="center">No events found! Check another date</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <div>
      {pageHeadData}
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
