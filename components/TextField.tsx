import { HTMLInputTypeAttribute } from "react";

interface TextFieldProps {
  placeholder: string;
  name: string;
  type?: HTMLInputTypeAttribute;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, name, type }) => {
  return (
    <input
      className="bg-black focus:outline-none border-b-[1px] p-2 min-w-full max-w-[40rem] text-neutral-500 border-neutral-900 my-3"
      name={name}
      placeholder={placeholder}
      type={type}
    ></input>
  );
};

export default TextField;
