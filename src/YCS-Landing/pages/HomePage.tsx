import { HeroComponent } from "../components/HeroComponent";
import { Description } from '../components/Description';
import { Features } from '../components/Features';
import { ProductsHome } from '../components/ProductsHome';


export const HomePage = () => {


  return (
    <>
      <HeroComponent />
      <main id="content" className="max-w-screen">
        <Description />
        <Features/>
        <ProductsHome/>
      </main>
    </>
  );
};
