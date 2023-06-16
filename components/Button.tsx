export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 border rounded-2xl text-lg w-fit hover:cursor-pointer border-blue-700 shadow-inside  hover:rounded-md transition-all">
      {children}
    </div>
  );
}
