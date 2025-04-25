import { ImageResponse } from "next/og";

export const alt = "Projects - Twitter Card";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";
export const runtime = "edge";
export const revalidate = 3600;
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
            top: "50%",
            left: "-192px",
            width: "384px",
            height: "384px",
            background: "rgba(236, 72, 153, 0.1)",
            borderRadius: "9999px",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            width: "384px",
            height: "384px",
            background: "rgba(59, 130, 246, 0.1)",
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
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "9999px",
                background: "rgb(168, 85, 247)",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "rgb(168, 85, 247)",
                fontWeight: 500,
              }}>
              Currently Frontend Lead Engineer
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bolder",
              background:
                "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(168, 85, 247))",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.2,
            }}>
            Professional Journey
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "32px",
              color: "rgb(209, 213, 219)",
              margin: 0,
              textAlign: "center",
              maxWidth: "800px",
            }}>
            Building the future of web experiences
          </p>
        </div>
      </div>
    ),
    size
  );
}
