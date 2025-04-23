import { ImageResponse } from "next/og";

export const alt =
  "Interactive Study Notes - Programming Guides & Best Practices";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image() {
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
          {/* Knowledge Base Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}>
            <div
              style={{
                width: "16px",
                height: "16px",
                background: "rgb(99, 102, 241)",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <span
              style={{
                color: "rgb(99, 102, 241)",
                fontSize: "14px",
                fontWeight: 500,
              }}>
              Knowledge Base
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              background:
                "linear-gradient(to right, rgb(99, 102, 241), rgb(139, 92, 246))",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.1,
            }}>
            Interactive Study Notes
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "24px",
              color: "rgb(209, 213, 219)",
              margin: 0,
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}>
            Explore comprehensive guides on programming, design patterns, and
            best practices
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "16px",
            }}>
            {["JavaScript", "TypeScript", "React", "Next.js"].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(99, 102, 241, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "rgb(99, 102, 241)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
