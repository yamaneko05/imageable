import FormLabel from "@/components/ui/FormLabel";
import Input from "@/components/ui/Input";

export default function FormField({
  label,
  type = "text",
  name,
  id,
  defaultValue,
  errors,
}: {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  id: string;
  defaultValue?: string;
  errors?: string[];
}) {
  return (
    <>
      <FormLabel attributes={{ htmlFor: id }}>{label}</FormLabel>
      <Input
        attributes={{
          type,
          name,
          id,
          defaultValue,
        }}
        error={errors !== undefined}
      />
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
