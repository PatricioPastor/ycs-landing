



export const CardFeatureComponent = ({svg, title, subtitle, content}: any) => {
  return (

    <div className="p-8 w-full max-h-content rounded m-6 bg-white box-shadow flex justify-start flex-col" >
      <div className="flex  justify-end items-center">
        <div className="rounded-full hover:scale-110 transition-all duration-300 bg-gray-100 shadow-2xl">
          <img className="w-44 p-4 " src={svg} alt="" />
        </div>
        <div className="flex flex-col pl-12 justify-end w-full">
          <h3 className="font-extrabold text-3xl">{title}</h3>
          <h4 className="text-gray-500">{subtitle}</h4>
        </div>
      </div>
      <p className="p-4 pb-0 mt-5 text-gray-800 font-semibold">{content}</p>
    </div>

  )
}
