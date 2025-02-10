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
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          {params.blog}
        </h1>
      </div>
    ),
    size
  );
}
