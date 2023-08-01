import { CardFeatureComponent } from './CardFeatureComponent';

interface Feature {
        title: string,
        subtitle: string,
        content: string,
        svg: string
}



const features: Feature[]  = [
    {
        title: "Vision",
        subtitle: "A Bright Future for Caribbean Restaurants",
        content:"",
        svg: ""
    },
    {
        title: "Vision",
        subtitle: "A Bright Future for Caribbean Restaurants",
        content:"",
        svg: ""
    },
    {
        title: "Vision",
        subtitle: "A Bright Future for Caribbean Restaurants",
        content:"",
        svg: ""
    }
]

export const Features = () => {
  return (
    <section className="h-52 flex justify-center max-w-full bg-slate-200 relative" >
        <div className="flex justify-center absolute shadow-xl -translate-y-32 rounded bg-white h-64 w-[70%]" >
            {
            features.map( card  => (
                <CardFeatureComponent key={card.title} {...card} />
            ))}
        </div>
    </section>
  )
}
