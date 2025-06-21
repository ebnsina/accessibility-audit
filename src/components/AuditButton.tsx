interface Props {
  onClick: () => void;
  disabled: boolean;
}

const AuditButton = ({ onClick, disabled }: Props) => (
  <button
    onClick={onClick}
    className="bg-cyan-500 text-white px-6 py-2 rounded-xl hover:bg-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={disabled}
  >
    Audit
  </button>
);

export default AuditButton;
