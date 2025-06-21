import { AxeResults } from "axe-core";

interface Props {
  loading: boolean;
  report: AxeResults["violations"];
}

const AccessibilityReport = ({ loading, report }: Props) => (
  <div className="w-full">
    <div className="flex justify-center items-center flex-col mt-10">
      <h2 className="text-2xl font-bold mb-4 text-cyan-500">
        Accessibility Report
      </h2>

      {loading && <p className="text-cyan-500 animate-pulse">Scanning...</p>}
      {!loading && report.length === 0 && (
        <p className="text-gray-500">No violations or not scanned yet.</p>
      )}
    </div>

    <ul className="space-y-6">
      {report.map((violation, index) => (
        <li
          key={index}
          className="p-6 border border-slate-300 bg-white rounded-xl flex flex-col gap-2"
        >
          <p className="font-bold text-rose-600 text-lg flex items-center gap-2">
            <span>❌</span> {violation.help}{" "}
            <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded">
              {violation.impact}
            </span>
          </p>

          <p className="text-sm text-gray-700">{violation.description}</p>

          <ul className="list-disc pl-6 mt-2 text-sm text-slate-700">
            {violation.nodes.map((node, i) => (
              <li key={i} className="mb-1">
                <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all inline-block max-w-full overflow-x-auto">
                  {node.html}
                </code>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default AccessibilityReport;
