type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({ label, error, ...props }: Props) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} className="border p-2 block" />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
