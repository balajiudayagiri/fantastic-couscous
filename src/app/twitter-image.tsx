import { ImageResponse } from "next/og";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(88, 28, 135, 0.2), rgb(5, 5, 5))",
          backgroundColor: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}>
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.1,
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Background Blur Elements */}
        <div
          style={{
            position: "absolute",
            top: "-192px",
            right: "0",
            width: "384px",
            height: "384px",
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "9999px",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-128px",
            left: "-128px",
            width: "384px",
            height: "384px",
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
            padding: "0 48px",
            zIndex: 10,
          }}>
          {/* Role Badge */}
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
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "rgb(168, 85, 247)",
                borderRadius: "9999px",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "rgb(168, 85, 247)",
                fontWeight: 500,
              }}>
              Front-End Lead Engineer
            </span>
          </div>

          {/* Name Section */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 800,
              background:
                "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
            Balaji Udayagiri
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
            Building AI-powered web solutions with React, Next.js, and
            TypeScript
          </p>

          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "16px",
            }}>
            {["React", "Next.js", "TypeScript", "AI"].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(168, 85, 247, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "rgb(168, 85, 247)",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                }}>
                {tech}
              </div>
            ))}
          </div>

          {/* Website URL */}
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
              balajiudayagiri.vercel.app
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
