import { HTMLInputTypeAttribute } from "react";

interface TextAreaProps {
  placeholder: string;
  name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, name }) => {
  return (
    <textarea
      className="bg-black focus:outline-none border-b-[1px] p-2 w-[40rem] text-neutral-500 border-neutral-900 my-3 h-52"
      name={name}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
