import { ImageResponse } from "next/og";

export const alt = "Blogs - Twitter Card";
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
          fontSize: 48,
          background: "#1DA1F2",
          color: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2rem",
        }}>
        Blogs
      </div>
    ),
    size
  );
}
