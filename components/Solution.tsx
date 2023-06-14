interface SolutionProps {
  title: String;
  text: String;
  onHover: () => void;
}

const Solution: React.FC<SolutionProps> = ({ text, title, onHover }) => {
  return (
    <div className="flex flex-col py-5" onMouseEnter={onHover}>
      <h4 className="text-lg pb-2">{title}</h4>
      <p className="w-96 text-neutral-500">{text}</p>
    </div>
  );
};

export default Solution;
