const quotes = [
  {
    quote: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    author: "-Stephen King",
  },
  {
    quote: "We write to taste life twice, in the moment and in retrospect.",
    author: "-Anaïs Nin",
  },
  {
    quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "--Toni Morrison",
  },
  {
    quote: "One day I will find the right words, and they will be simple.",
    author: "--Jack Kerouac, The Dharma Bums",
  },
  {
    quote: "Either write something worth reading or do something worth writing.",
    author: "--Saul Bellow",
  },
  {
    quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    author: "--Robert Frost",
  },
  {
    quote: "You must stay drunk on writing so reality cannot destroy you.",
    author: "--Ray Bradbury, Zen in the Art of Writing",
  },
  {
    quote: "How vain it is to sit down to write when you have not stood up to live.",
    author: "--Henry David Thoreau",
  },
  {
    quote: "I can shake off everything as I write; my sorrows disappear, my courage is reborn.",
    author: "--Anne Frank",
  },
  {
    quote: "A writer is someone for whom writing is more difficult than it is for other people.",
    author: "--Thomas Mann, Essays of Three Decades",
  },
] 

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;