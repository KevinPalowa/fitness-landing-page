export default function NavBar() {
  return (
    <div className="flex relative z-10 items-center justify-between font-sans">
      <h2 className="font-semibold text-lg">WORKOUT</h2>
      <ul className=" flex text-sm space-x-12 text-white/70">
        <li className="cursor-pointer hover:text-white/100">EXERCISES</li>
        <li className="cursor-pointer hover:text-white/100">TRAINERS</li>
        <li className="cursor-pointer hover:text-white/100">PRICING</li>
        <li className="cursor-pointer hover:text-white/100">LOGIN</li>
      </ul>
    </div>
  );
}
