import { ImageResponse } from "next/og";

export const alt = "Research Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { blog: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
