export default function Button({ children, className }) {
  return (
    <a
      className={`cursor-pointer text-lg font-semibold inline-block rounded-xl py-5 px-10 ${className}`}
    >
      {children}
    </a>
  );
}
