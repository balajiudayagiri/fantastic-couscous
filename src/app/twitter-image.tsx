import { ImageResponse } from "next/og";

export const alt = "Twitter Card for Balaji Udayagiri";
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          background: "linear-gradient(90deg, #1DA1F2, #0d8bdb)",
        }}>
        <h1
          style={{
            fontSize: 60,
            fontWeight: 600,
            color: "#ffffff",
          }}>
          Balaji Udayagiri
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
