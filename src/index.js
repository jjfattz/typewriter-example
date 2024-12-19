const textToType = ".typewriter p";
const paragraphs = document.querySelectorAll(textToType);
console.log("RUNNING");

paragraphs.forEach((paragraph) => {
  const textLength = paragraph.textContent.length;
  paragraph.style.animation = `typing 3s steps(${textLength}) forwards, blink 1s step-end infinite`;
});
