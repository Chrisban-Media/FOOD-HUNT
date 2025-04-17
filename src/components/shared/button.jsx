export default function Button({ children }) {
  return (
    <button className="py-2 px-4 bg-[var(--primary-color)] rounded-full">
      {children}
    </button>
  );
}

export function TransparentButton({ children }) {
  return (
    <button className="bg-none border-gray border-2 rounded-full py-2 px-4">
      {children}
    </button>
  );
}
