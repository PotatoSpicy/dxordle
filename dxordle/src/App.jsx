import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import {GuessCard} from "./components/guessCard.jsx";
import {FinalGuessCard} from "./components/finalGuessCard.jsx";

export default function App() {
  return (
      <div className="flex min-h-screen flex-col">
        <Navbar/>

        <main className="flex flex-1 place-items-start justify-center my-5">
          <div className="flex flex-col gap-5">
              <GuessCard id="1"/>
              <GuessCard id="2"/>
              <GuessCard id="3"/>
              <GuessCard id="4"/>
              <FinalGuessCard/>
          </div>
        </main>

        <Footer/>
      </div>
  );
}