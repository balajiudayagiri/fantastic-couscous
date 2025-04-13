import { ImageResponse } from "next/og";

export const alt = "Research Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function capitalizeTitle(slug: string) {
  // Special cases for words that should remain lowercase (if needed)
  const lowercaseWords = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "in",
    "to",
    "on",
    "at",
    "by",
    "of",
  ];

  return slug
    .split("-")
    .map((word, index) => {
      // For first and last words, always capitalize
      if (index === 0 || index === slug.split("-").length - 1) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      // For other words, check if they should remain lowercase
      return lowercaseWords.includes(word)
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export default async function Image({ params }: { params: { blog: string } }) {
   const formattedTitle = capitalizeTitle(params.blog);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <h1
          style={{
            fontSize: "100%",
            margin: "0px auto",
            fontWeight: 800,
            color: "white",
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            lineHeight: 1.2,
          }}>
          {formattedTitle}
        </h1>
      </div>
    ),
    size
  );
}
