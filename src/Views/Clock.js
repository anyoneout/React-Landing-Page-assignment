import React from "react";

export function Clock(props) {
  const src = props.src;
  const videoDivStyle = { width: "100%", maxWidth: "800px", margin: "auto" };
  const localVidStyle = { width: "100%", height: "auto" };
  return (
    <>
      <div style={videoDivStyle}>
        <video src={src} style={localVidStyle} controls />
      </div >
    </>
  )
}