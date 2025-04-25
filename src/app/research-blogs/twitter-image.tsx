import { ImageResponse } from "next/og";

export const alt = "Research Blogs - Twitter Card";
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
            "linear-gradient(to bottom, rgba(126, 34, 206, 0.2), rgb(5, 5, 5))",
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
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "9999px",
            filter: "blur(64px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "25%",
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
          }}>
          {/* Stats Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
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
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
              35+ Research Articles
            </span>
            <div
              style={{
                width: "1px",
                height: "16px",
                background: "rgba(168, 85, 247, 0.2)",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                color: "rgb(168, 85, 247)",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
              1K+ Monthly Readers
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                gap: "8px",
              }}>
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: 800,
                  background:
                    "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(168, 85, 247))",
                  backgroundClip: "text",
                  color: "transparent",
                  textWrap: "wrap",
                  margin: 0,
                  textAlign: "center",
                  lineHeight: 1.1,
                }}>
                Technical Research &
              </h1>
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: 800,
                  background:
                    "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(168, 85, 247))",
                  backgroundClip: "text",
                  color: "transparent",
                  textWrap: "wrap",
                  margin: 0,
                  textAlign: "center",
                  lineHeight: 1.1,
                }}>
                In-Depth Insights
              </h1>
            </div>

            <p
              style={{
                fontSize: "24px",
                color: "rgb(209, 213, 219)",
                margin: 0,
                textAlign: "center",
                maxWidth: "700px",
                lineHeight: 1.5,
              }}>
              Exploring cutting-edge web development concepts and innovative
              solutions
            </p>
          </div>
        </div>
      </div>
    ),
    size
  );
}
