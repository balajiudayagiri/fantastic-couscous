import { StudyNotesList } from "@b/_customComponents/_app/_study-notes/constant";
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const revalidate = 3600;
export const alt = "Study Note Detail";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

function parseSlugAndId(param: string): { id: number; slug: string } | null {
  const match = param.match(/^(.+)-(\d+)$/);
  if (!match) return null;
  return {
    slug: match[1],
    id: parseInt(match[2], 10),
  };
}

export default async function Image({ params }: { params: { notes: string } }) {
  const parsedParams = parseSlugAndId(params.notes);
  const note = parsedParams
    ? StudyNotesList.find((n) => n.id === parsedParams.id)
    : null;

  const title = note?.title || "Study Note";

  const formatTitle = (title: string) => {
    const parts = title.split(/(`[^`]+`)/);

    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-4xl font-bold font-mono 
                bg-gradient-to-r from-violet-500/10 to-indigo-500/10 text-indigo-700 
                dark:text-indigo-300 border border-indigo-500/20">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))",
          backgroundColor: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}>
        {/* Background Blur Elements */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "25%",
            width: "384px",
            height: "384px",
            background: "rgba(99, 102, 241, 0.3)",
            borderRadius: "9999px",
            filter: "blur(128px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "25%",
            width: "384px",
            height: "384px",
            background: "rgba(139, 92, 246, 0.3)",
            borderRadius: "9999px",
            filter: "blur(128px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            padding: "0 48px",
            zIndex: 10,
          }}>
          {/* Study Notes Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(99, 102, 241, 0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "rgb(99, 102, 241)",
                borderRadius: "9999px",
              }}
            />
            <span
              style={{
                color: "rgb(99, 102, 241)",
                fontSize: "16px",
                fontWeight: 500,
              }}>
              Study Notes
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              background:
                "linear-gradient(to right, rgb(99, 102, 241), rgb(139, 92, 246))",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}>
            {formatTitle(title)}
          </h1>

          {/* Author Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}>
            <span
              style={{
                color: "rgb(209, 213, 219)",
                fontSize: "14px",
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
