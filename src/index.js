import { createRoot } from "react-dom/client";
import React from "react";
import { handleSubmit } from "./controllers/handleSubmit";
import { Clock } from "./Views/Clock";




const root = createRoot(window.bodyTag);
root.render(
  <>
    <main>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2" id="spaceRow1">
          <h1>A Clock</h1>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br></br>
            <input type="text" name="userName" />
            <br></br>
            <label>Email:</label>
            <br></br>
            <input type="email" name="userEmail" />
            <br></br><br></br>
            <input type="submit" name="Submit" />
          </form>
          <br></br>
          <output id="outputTag"></output>
        </div>
        <div className="col-4">
          <Clock src="./assets/clock.mp4" />
        </div>
        <div className="col-1"></div>
        <div className="col-3" id="spaceRow2">
          <h3>"Tick-Tock, Your Time Has Come!"</h3>
          <br></br>
          <p>Welcome to the future of timekeeping with our sleek and simple web-based digital clock! Whether you're counting down to a big event or just need to keep track of the hours our digital clock has got your back.</p>
          <p>It's clear, it's reliable, and it's here to keep you punctual with zero fuss. No more squinting at tiny clocks or missing a meeting - this one's big, bold, and right in front of you. Plus, it's always on time, so you won't have to worry about those batteries running low!</p>
          <p>Perfect for your desktop, laptop, or even as a stylish way to keep track of time while you're multitasking. Set your timer, stay on schedule, and maybe even squeeze in a little extra fun while you're at it!</p>
          <p>Ready to know the time? It's always now - with our digital clock, you're never late.</p>
          <br></br>
          <ul>Features
            <li>Seconds</li>
            <li>Minutes</li>
            <li>Hours</li>
          </ul>
        </div>
      </div>
    </main >
  </>
)

