import React from "react";

interface Props {
  fileUrl: string;
  iframeRef: React.RefObject<HTMLIFrameElement | null>;
}

const HtmlPreview = ({ fileUrl, iframeRef }: Props) => (
  <div className="w-full mb-8 rounded-lg overflow-hidden border border-slate-200 bg-white max-w-2xl mx-auto">
    <iframe
      ref={iframeRef}
      src={fileUrl}
      className="w-full h-80 sm:h-96 border-none"
      title="Uploaded HTML Preview"
      sandbox="allow-scripts allow-same-origin"
    ></iframe>
  </div>
);

export default HtmlPreview;
