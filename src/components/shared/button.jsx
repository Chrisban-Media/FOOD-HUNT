export default function Button({ children }) {
  return (
    <button className="py-2 px-4 bg-[var(--primary-color)] rounded-full">
      {children}
    </button>
  );
}
