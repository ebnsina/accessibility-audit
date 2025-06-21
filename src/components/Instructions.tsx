const Instructions = () => (
  <div className="w-full max-w-2xl mx-auto relative mb-8">
    <div className="absolute inset-0 pointer-events-none z-0 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-[conic-gradient(at_top_left,theme(colors.cyan.400),theme(colors.cyan.200),theme(colors.cyan.400),theme(colors.cyan.600),theme(colors.cyan.400))] before:animate-border-beam before:opacity-80 before:-z-10" />
    <div className="relative bg-white/80 border border-cyan-100 rounded-2xl p-6 text-slate-700 z-10">
      <h2 className="text-xl font-bold mb-2 text-cyan-500">How to use</h2>
      <ol className="list-decimal list-inside space-y-1 ml-4">
        <li>
          Click <span className="font-semibold">Choose File</span> and upload a
          local <span className="font-mono">.html</span> file.
        </li>
        <li>
          Click <span className="font-semibold">Audit</span> to scan the
          uploaded page for accessibility issues.
        </li>
        <li>
          Review the accessibility report below for any violations and suggested
          fixes.
        </li>
        <li>To test another file, simply upload a new HTML file.</li>
      </ol>
      <p className="mt-3 text-xs text-slate-500">
        Note: This tool works only with local HTML files for privacy and
        security reasons.
      </p>
    </div>
  </div>
);

export default Instructions;
