import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <samp>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ padding: "1rem", borderRadius: "0.5rem" }}>
        {code.trim()}
      </SyntaxHighlighter>
    </samp>
  );
}
