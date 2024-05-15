import { Label } from "./label";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text: string;
  errors?: string[];
}

export const Input = ({ text, errors, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={rest.name}>{text}</Label>
      <input
        className={
          "rounded-xl bg-gray-200 p-4" +
          (errors?.length ? " border-2 border-red-500" : "")
        }
        {...rest}
      />

      {errors?.map((error, index) => (
        <span key={index} className="text-red-500 text-sm">
          {error}
        </span>
      ))}
    </div>
  );
};
