import Hero from "./Components/Hero";
import Lists from "./Components/Lists";
import PopularSection from "./Components/PopularSection";
import Trainer from "./Components/Trainer";
function App() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <div className="container mx-auto py-[3.75rem]">
        <Hero />
        <PopularSection />
        <Trainer />
        <Lists />
      </div>
    </main>
  );
}

export default App;
