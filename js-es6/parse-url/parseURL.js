function parseURL(urlString) {
  const segments = urlString.split("/");
  return segments
}

const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray) // ["en-US", "docs", "Web", "API", "URL", "pathname"]

const url = "https://github.com/luciamndz/es-react-challenges";
const test = parseURL(url);
console.log(test);
