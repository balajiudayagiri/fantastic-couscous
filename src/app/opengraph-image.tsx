import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          background: "linear-gradient(90deg, #7928CA, #FF0080)",
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
      height: 630,
    }
  );
}
