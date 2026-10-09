// Blog post bodies are stored as plain text using a light markdown-style
// convention: a line starting with "## " begins a new heading + paragraph
// group, and blank lines separate paragraphs. This keeps the admin editor
// to a single textarea while still producing the heading/paragraph blocks
// the blog pages render.
export function parsePostContent(raw) {
  const lines = String(raw || "").split(/\r?\n/);
  const sections = [];
  let current = { heading: null, body: [] };
  let paragraphLines = [];

  const flushParagraph = () => {
    const text = paragraphLines.join(" ").trim();
    if (text) current.body.push(text);
    paragraphLines = [];
  };

  const flushSection = () => {
    flushParagraph();
    if (current.heading || current.body.length > 0) sections.push(current);
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      flushSection();
      current = { heading: trimmed.slice(3).trim(), body: [] };
    } else if (trimmed === "") {
      flushParagraph();
    } else {
      paragraphLines.push(trimmed);
    }
  }
  flushSection();

  return sections;
}
