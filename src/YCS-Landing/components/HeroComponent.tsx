
export const HeroComponent = () => {
  return (
    <section className=" bg-[#EEFAFF] w-full h-screen relative top-0">
        <div className="flex flex-wrap flex-col items-center my-auto h-full justify-center" >
            <div className="text-center mt-20 z-40 animate-fade-down animate-once animate-delay-500 animate-duration-1000 animate-ease-in-out">
                <h1 className="text-6xl mb-5 font-bold " >Software Development</h1>
                <h3 className="text-3xl mb-40  mt-2 font-semibold" >For the Restaurant Industry</h3>
                <button className="bg-sky-800 hover:border-blue-400 w-32 h-10 transition-all duration-700 text-white hover:text-black  font-semibold hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-400 mx-auto rounded border-solid border-sky-800 border-2" >
                    Read More
                </button>
            </div>
            
        </div>
        

    </section>
  )
}
