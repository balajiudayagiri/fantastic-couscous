import { ImageResponse } from "next/og";

export const alt = "Blogs - Twitter Card";
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
          fontSize: 48,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            height: "auto",
            width: "100%",
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
            Blogs
          </h1>
          <p
            style={{
              padding: "0px 10%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1.5rem",
              fontSize: "1.25rem",
              color: "white",
              opacity: 0.85,
              fontWeight: 500,
            }}>
            Thoughts on development, design, and technology
          </p>
        </div>
      </div>
    ),
    size
  );
}
