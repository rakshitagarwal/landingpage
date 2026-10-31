import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#2ef2ff",
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 6,
          border: "1px solid rgba(46,242,255,0.45)",
        }}
      >
        P
      </div>
    ),
    size
  );
}
