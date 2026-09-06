/** Tiny markdown-ish renderer for lesson content (headings, bold, lists, paragraphs). */
export function MarkdownLite({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);
  return (
    <div className="prose-fluenta space-y-4 text-slate-700">
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        if (lines[0].startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-slate-900">
              {lines[0].replace(/^## /, "")}
            </h2>
          );
        }
        if (lines[0].startsWith("### ")) {
          return (
            <h3 key={i} className="text-lg font-bold text-slate-900">
              {lines[0].replace(/^### /, "")}
            </h3>
          );
        }
        if (lines.every((l) => l.trim().startsWith("- ") || l.trim() === "")) {
          return (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {lines
                .filter((l) => l.trim().startsWith("- "))
                .map((l, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: inline(l.replace(/^\s*-\s*/, "")) }} />
                ))}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\.\s/.test(l.trim()) || l.trim() === "")) {
          return (
            <ol key={i} className="list-decimal space-y-1 pl-5">
              {lines
                .filter((l) => /^\d+\.\s/.test(l.trim()))
                .map((l, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: inline(l.replace(/^\s*\d+\.\s*/, "")) }} />
                ))}
            </ol>
          );
        }
        return (
          <p
            key={i}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lines.map(inline).join("<br/>") }}
          />
        );
      })}
    </div>
  );
}

function inline(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="rounded bg-slate-100 px-1 py-0.5 text-[0.9em]">$1</code>');
}
