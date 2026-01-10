import { useState } from "react";

export default function ImageViewer() {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState("");

  return (
    <div className="p-6">
      {/* Thumbnail */}
      <img
        src="/image.jpg"
        alt=""
        className="w-48 cursor-pointer rounded"
        onClick={() => {
          setSrc("/image.jpg");
          setOpen(true);
        }}
      />

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt=""
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
