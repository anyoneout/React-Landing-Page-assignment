import { output } from "../utils/output";

export function handleSubmit(event = new Event()) {
  event.preventDefault();
  const userInput = event.target;
  const userName = userInput[0];
  const userEmail = userInput[1];
  if (!userName.value & !userEmail.value) {
    output("Please enter a name and email");
  } else if (!userName.value) {
    output("Please enter a name");
  } else if (!userEmail.value) {
    output(`${userName.value}, please enter your email`);
  } else
    output(`Thank you ${userName.value}.<br> You've been sent a 15% discount to: ${userEmail.value}.`);

  console.log("submitted");

}