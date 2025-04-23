import { researchBlogs } from "@b/_customComponents/_app/_research-blogs/researchBlogs";
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
  const blog = researchBlogs.find((b) => b.id === params.blog);
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(126, 34, 206, 0.2), rgb(5, 5, 5))",
          backgroundColor: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "40px",
        }}>
        {/* Background Blur Elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-50px",
            width: "300px",
            height: "300px",
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "9999px",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-50px",
            width: "300px",
            height: "300px",
            background: "rgba(236, 72, 153, 0.1)",
            borderRadius: "9999px",
            filter: "blur(64px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            maxWidth: "90%",
          }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(168, 85, 247, 0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}>
            <span
              style={{
                fontSize: "16px",
                color: "rgb(168, 85, 247)",
                fontWeight: 500,
              }}>
              Technical Research
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              background:
                "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.2,
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}>
            {formattedTitle}
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "rgb(209, 213, 219)",
              margin: 0,
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}>
            {blog?.title}
          </p>

          {/* Author Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              backdropFilter: "blur(8px)",
            }}>
            <span
              style={{
                fontSize: "14px",
                color: "rgb(209, 213, 219)",
              }}>
              By Balaji Udayagiri
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
