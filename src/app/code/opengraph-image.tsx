import { ImageResponse } from "next/og";

export const alt = "Beautiful Code Examples - Interactive UI Components";
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
            justifyContent: "center",
            gap: "24px",
            padding: "0 48px",
            textAlign: "center",
          }}>
          {/* Technologies Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(168, 85, 247, 0.1)",
              padding: "8px 16px",
              borderRadius: "9999px",
              border: "1px solid rgba(168, 85, 247, 0.2)",
            }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: "#E44D26",
                }}
              />
              <span style={{ fontSize: "14px", color: "rgb(209, 213, 219)" }}>
                HTML
              </span>
            </div>
            <div
              style={{
                width: "1px",
                height: "16px",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: "#264DE4",
                }}
              />
              <span style={{ fontSize: "14px", color: "rgb(209, 213, 219)" }}>
                CSS
              </span>
            </div>
            <div
              style={{
                width: "1px",
                height: "16px",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "9999px",
                  background: "#F7DF1E",
                }}
              />
              <span style={{ fontSize: "14px", color: "rgb(209, 213, 219)" }}>
                JavaScript
              </span>
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              background:
                "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153))",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              lineHeight: 1.2,
              maxWidth: "900px",
            }}>
            Beautiful Code Examples
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "24px",
              color: "rgb(209, 213, 219)",
              margin: 0,
              maxWidth: "700px",
              lineHeight: 1.5,
            }}>
            Interactive UI components and animations with ready-to-use code
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "16px",
            }}>
            {["Interactive", "Copy Ready", "Open Source"].map((stat) => (
              <div
                key={stat}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "rgb(168, 85, 247)",
                }}>
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
