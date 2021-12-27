import Hero from "./Components/Hero";
import PopularSection from "./Components/PopularSection";
import Trainer from "./Components/Trainer";
function App() {
  return (
    <main className="bg-black text-white">
      <div className="container mx-auto py-[3.75rem]">
        <Hero />
        <PopularSection />
        <Trainer />
      </div>
    </main>
  );
}

export default App;
