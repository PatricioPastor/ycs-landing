import { HeroComponent } from "../components/HeroComponent";
import { Description } from '../components/Description';
import { Features } from '../components/Features';

export const HomePage = () => {

  

  return (
    <>
      <HeroComponent />
      <main className="max-w-screen">
        <Description />
        <Features/>
      </main>
    </>
  );
};
