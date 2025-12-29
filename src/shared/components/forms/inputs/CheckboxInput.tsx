type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function CheckboxInput({ label, error, ...props }: Props) {
  return (
    <div>
      <label>
        <input type="checkbox" {...props} /> {label}
      </label>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
