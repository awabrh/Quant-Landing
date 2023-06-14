export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 pb-1 border rounded-2xl text-xl hover:cursor-pointer border-cyan-700 shadow-inside hover:bg-white hover:text-black hover:rounded-md transition-all">
      {children}
    </div>
  );
}
