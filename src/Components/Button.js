export default function Button({ children, bg }) {
  return (
    <a
      className={`bg-[${bg}] text-lg font-semibold inline-block rounded-xl py-5 px-10`}
    >
      {children}
    </a>
  );
}
