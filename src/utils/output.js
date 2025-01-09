export function output(message = "", outputTag = "outputTag", shouldAppend = false) {
  if (shouldAppend) window[outputTag].innerHTML += message;
  else window[outputTag].innerHTML = message;
}; 