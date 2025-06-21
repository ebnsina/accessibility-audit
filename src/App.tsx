import { AxeResults } from "axe-core";
import { useRef, useState } from "react";
import FileUpload from "./components/FileUpload";
import AuditButton from "./components/AuditButton";
import HtmlPreview from "./components/HtmlPreview";
import AccessibilityReport from "./components/AccessibilityReport";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";

const App = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [report, setReport] = useState<AxeResults["violations"]>([]);
  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFile = (url: string) => {
    setFileUrl(url);
    setReport([]);
  };

  const runAudit = () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return alert("Iframe not loaded");

    const iframeWin = iframe.contentWindow as Window & { axe?: any };
    const iframeDoc = iframe.contentDocument;

    try {
      void iframeWin.location.href;
    } catch {
      setLoading(false);
      alert(
        "Cannot audit this page due to browser security restrictions (cross-origin). Please use a local HTML file."
      );
      return;
    }

    setLoading(true);
    setReport([]);

    const script = iframeDoc?.createElement("script");
    if (!script) return;

    script.src = "https://unpkg.com/axe-core@4.7.2/axe.min.js";
    script.onload = () => {
      iframeWin.axe.run(
        iframeDoc,
        {},
        (err: Error | null, results: AxeResults) => {
          if (err) {
            alert("Axe error: " + err.message);
          } else {
            setReport(results.violations);
          }
          setLoading(false);
        }
      );
    };
    iframeDoc?.head.appendChild(script);
  };

  return (
    <div className="mx-auto p-4 sm:p-8 min-h-screen bg-gradient-to-br from-cyan-50 to-slate-100 flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-6 text-cyan-500 flex items-center gap-2 text-center">
        <span
          role="img"
          aria-label="accessibility"
          className="text-cyan-400 drop-shadow-md text-4xl sm:text-5xl"
        >
          ♿
        </span>
        <span className="ml-2">Accessibility Audit Tool</span>
      </h1>
      <Instructions />
      <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-2xl items-center justify-center">
        <FileUpload onFile={handleFile} />
        <AuditButton onClick={runAudit} disabled={!fileUrl} />
      </div>
      {fileUrl && <HtmlPreview fileUrl={fileUrl} iframeRef={iframeRef} />}
      <AccessibilityReport loading={loading} report={report} />
      <Footer />
    </div>
  );
};

export default App;
