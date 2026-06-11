import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeCard({ url }) {
  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <div
        ref={qrRef}
        className="bg-white p-4 rounded-xl"
      >
        <QRCodeCanvas
          value={url}
          size={200}
        />
      </div>

      <button
        type="button"
        onClick={downloadQR}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Download QR
      </button>
    </div>
  );
}