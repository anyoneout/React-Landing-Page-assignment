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
        <div className="col-3" id="spaceRow">
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
        <div className="col-4"></div>
      </div>
    </main>
  </>
)

