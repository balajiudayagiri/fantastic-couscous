import { ImageResponse } from "next/og";

export const alt = "Research Blog Post - Twitter Card";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { blog: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#1DA1F2",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          padding: "0 2rem",
          textAlign: "center",
          textTransform: "uppercase",
        }}>
        {params.blog}
      </div>
    ),
    size
  );
}
