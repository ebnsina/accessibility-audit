interface Props {
  onFile: (fileUrl: string) => void;
}

const FileUpload = ({ onFile }: Props) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onFile(url);
    }
  };

  return (
    <input
      type="file"
      accept=".html,text/html"
      onChange={handleFileUpload}
      className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-100 file:text-cyan-500 hover:file:bg-cyan-200 transition"
    />
  );
};

export default FileUpload;
