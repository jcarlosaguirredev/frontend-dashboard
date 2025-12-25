type Props = {
  label: string;
  options: { label: string; value: string }[];
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectInput({ label, options, error, ...props }: Props) {
  return (
    <div>
      <label>{label}</label>
      <select {...props} className="border p-2 block">
        <option value="">Selecciona...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
