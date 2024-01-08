import React from "react";
import MainHeader from "./header/MainHeader";

export default function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}
