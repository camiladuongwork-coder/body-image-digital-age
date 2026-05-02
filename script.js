const prompts = [
  {
    title: "Is this body standard realistic?",
    text: "Ask whether the image or video may involve posing, editing, lighting, filters, genetics, or professional production."
  },
  {
    title: "Is this advice scientific?",
    text: "Be careful with diet rules, supplement claims, detox language, and routines that do not come from qualified health professionals."
  },
  {
    title: "What is the algorithm rewarding?",
    text: "A post may be recommended because it keeps people watching, not because it is healthy, balanced, or true."
  },
  {
    title: "How does this content affect me?",
    text: "If a feed increases shame, anxiety, comparison, or pressure to restrict food, that is useful information. Curating the feed is a health choice."
  }
];

const count = document.querySelector("#prompt-count");
const title = document.querySelector("#prompt-title");
const text = document.querySelector("#prompt-text");
const previous = document.querySelector("#prev-prompt");
const next = document.querySelector("#next-prompt");

let index = 0;

function renderPrompt() {
  const prompt = prompts[index];
  count.textContent = `Prompt ${index + 1} of ${prompts.length}`;
  title.textContent = prompt.title;
  text.textContent = prompt.text;
  previous.disabled = index === 0;
  next.textContent = index === prompts.length - 1 ? "Restart" : "Next";
}

previous.addEventListener("click", () => {
  index = Math.max(0, index - 1);
  renderPrompt();
});

next.addEventListener("click", () => {
  index = index === prompts.length - 1 ? 0 : index + 1;
  renderPrompt();
});

renderPrompt();
