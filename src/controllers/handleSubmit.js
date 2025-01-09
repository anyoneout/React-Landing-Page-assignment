
import { output } from "../utils/output";

export function handleSubmit(event = new Event()) {
  event.preventDefault();
  const userInput = event.target;
  const userName = userInput[0];
  const userEmail = userInput[1];
  if (!userName.value & !userEmail.value) {
    output("Please enter name and email.");
  } else if (!userName.value) {
    output("Please enter name");
  } else if (!userEmail.value) {
    output("Please enter email");
  } else
    output(`Name: ${userName.value}<br> Email: ${userEmail.value}`);

  console.log("submitted");

}