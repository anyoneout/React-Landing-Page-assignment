import React from "react";

export function Clock(props) {
  const src = props.src;
  return (
    <>
      <video src={src} style={{ width: 600, height: 600 }} controls />
    </>
  )
}