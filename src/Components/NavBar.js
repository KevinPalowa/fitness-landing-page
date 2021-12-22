export default function NavBar() {
  return (
    <div className="flex items-center justify-between font-sans text-white">
      <h2 className="font-semibold text-lg">WORKOUT</h2>
      <ul className=" flex text-sm space-x-12 opacity-70">
        <li>EXERCISES</li>
        <li>TRAINERS</li>
        <li>PRICING</li>
        <li>LOGIN</li>
      </ul>
    </div>
  );
}
