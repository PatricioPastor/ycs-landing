import { YCSCardComponent, YCSFiscalComponent, YibzerComponent } from './ProductSliderComponent';


export const ProductsHome = () => {
  return (
    <section className="overflow-auto no-scrollbar snap-y snap-mandatory relative h-screen w-full">
            <div className="snap-center">
                <YCSFiscalComponent/>
            </div>
            <div className="snap-center">
                <YCSCardComponent/>
            </div>
            <div className="snap-center">
                <YibzerComponent/>
            </div>
    </section>
  )
}
