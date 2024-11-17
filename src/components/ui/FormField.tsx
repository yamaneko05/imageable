import FormLabel from "@/components/ui/FormLabel";

export default function FormField({
  children,
  label,
  id,
  errors,
}: {
  children: React.ReactNode;
  label: string;
  id: string;
  errors?: string[];
}) {
  return (
    <>
      <FormLabel attributes={{ htmlFor: id }}>{label}</FormLabel>
      {children}
      {errors && (
        <ul className="text-sm text-red-500">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
}
