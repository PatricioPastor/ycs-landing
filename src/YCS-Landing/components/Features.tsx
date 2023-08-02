import { CardFeatureComponent } from './CardFeatureComponent';
import  Vision  from '../../assets/vision.svg'
import  Mision  from '../../assets/mision.svg'
import  Values  from '../../assets/values.svg'

interface Feature {
        title: string,
        subtitle: string,
        content: string,
        svg: string
}



const features: Feature[]  = [
    {
        title: "Vision",
        subtitle: `A Bright Future for
                 Restaurants`,
        content:"Our goal is to transform YCS PR Corp. into a leading $20 million international software development company, specializing in revolutionizing the restaurant industry across the Caribbean.",
        svg: Vision
    },
    {
        title: "Mision",
        subtitle: "Success Empowered by Technology",
        content:"At YCS PR Corp., we are dedicated to driving your restaurant's success through innovative software solutions. Our passion is to boost sales, cut costs, and enhance overall performance with cutting-edge technology.",
        svg: Mision
    },
    {
        title: "Values",
        subtitle: "Excellence in Action",
        content:'At YCS PR Corp., we are driven by our core values to innovate the future of restaurants, deliver excellence beyond expectations, unite as a team for extraordinary results, build strong collaborations for mutual growth, and uphold the highest integrity.',
        svg: Values
    }
]

export const Features = () => {
  return (
    <section className="h-[500px] flex justify-center max-w-full bg-[#F2FAFF] relative" >
        <div className="flex justify-evenly absolute font-body -translate-y-44 rounded bg-transparent max-h-min w-[80%]" >
            {
            features.map( card  => (
                <CardFeatureComponent key={card.title} {...card} />
            ))}
        </div>
    </section>
  )
}
