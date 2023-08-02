import YSCFiscal from '../../assets/yscfiscal-logo.svg'
import YCSCard from '../../assets/ycscard.svg'
import Yibzer from '../../assets/yibzer.svg'

export const YCSCardComponent = () => {
  return (
    <div className="bg-gradient-to-r flex items-center justify-around text-center font-body from-sky-400 to-cyan-300 h-screen w-full">
      <div className="h-screen w-full flex flex-col justify-center items-start">
        <div className="max-w-2xl ml-24 p-8 bg-white rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold mb-4">YCSCard</h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
          Software for Credit Card Processing and Reconciliation
          </h2>

          <img
            src={YCSCard}
            alt="IVU Reporting"
            className="w-xl mx-auto mb-2 rounded-lg"
          />

          <p className="text-xl font-bold text-gray-800 mb-6">
            Streamline Your Business with YCS Card!
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Say goodbye to manual credit card reconciliations and errors. YCS Card is the cutting-edge software you need to automate the process, <strong>saving up to 86% of your time and boosting sales by 2% with faster transactions.</strong>
          </p>

          <button className="bg-sky-800 mt-10 hover:border-blue-400 w-32 h-10 transition-all duration-700 text-white hover:text-black  font-semibold hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-400 mx-auto rounded border-solid border-sky-800 border-2">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};



export const YCSFiscalComponent = () => {
  return (
    <div className="bg-gradient-to-r flex items-center justify-around text-center font-body from-sky-400 to-cyan-300 h-screen w-full">
      <div className="h-screen w-full flex flex-col justify-center items-start">
        <div className="max-w-2xl ml-24 p-8 bg-white rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold mb-4">IVU Reporting</h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">
            With the Treasury Department of Puerto Rico
          </h2>

          <img
            src={YSCFiscal}
            alt="IVU Reporting"
            className="w-xl mx-auto rounded-lg"
          />

          <p className="text-xl font-bold text-gray-800 mb-4">Compliance Made Easy</p>
          <p className="text-gray-600 text-lg mb-6">
            The Tax Supervision Program for Sales and Use Tax (IVU in Puerto Rico) <strong>is an IVU audit program which uses technology to ensure that businesses comply with tax regulations.</strong>
          </p>
          <p className="text-gray-600 text-lg mb-6">
            YCS Fiscal is a reliable and secure software, certified by the Treasury Department of Puerto Rico, to effortlessly report fiscal information or IVU (previously known as IVU Loto).
          </p>

          <p className="text-xl font-bold text-gray-800 mb-4">Streamlined Reporting</p>
          <p className="text-gray-600 text-lg mb-6">
            <strong>Say goodbye to fines and equipment replacement costs!</strong> YCS Fiscal simplifies the process of reporting IVU and ensures compliance with the Treasury Department.
          </p>

          <p className="text-gray-600 text-lg mt-6">
            <strong>Don't Miss Out on This Game-Changing Tool!</strong>
          </p>
          <button className="bg-sky-800 mt-8 hover:border-blue-400 w-32 h-10 transition-all duration-700 text-white hover:text-black  font-semibold hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-400 mx-auto rounded border-solid border-sky-800 border-2">
            Show More
          </button>
        </div>
      </div>
    </div>
  )
}


export const YibzerComponent = () => {
    return (
        <div className=" flex items-center justify-around text-center font-body bg-gradient-to-r from-orange-400 to-rose-400 h-screen w-full">
        <div className="h-screen w-full flex flex-col justify-center items-start">
          <div className="max-w-2xl ml-24 p-8 bg-white rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold mb-4">Yibzer App</h1>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">
            
            </h2>
  
            <img
              src={Yibzer}
              alt="Yibzer"
              className="w-56 mx-auto mb-2 rounded-lg"
            />

            <p className="text-xl font-bold text-gray-800 mb-6">
              Introducing Yibzer - Coming Soon!
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Yibzer is the first app in Puerto Rico where you can order from your favorite restaurant, pay online with no additional fees, and pick up your food without waiting in lines!
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Schedule your order and get ready!
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Choose the pickup time that suits you best.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Don't wait for your food; <strong>let it wait for you!</strong>
            </p>
  
            <button className="bg-amber-800  my-4 hover:border-amber-400 w-32 h-10 transition-all duration-700 text-white hover:text-black  font-semibold hover:shadow-lg hover:shadow-amber-600 hover:bg-amber-400 mx-auto rounded border-solid border-amber-800 border-2">
              Show More
            </button>
            <p className="text-gray-400 text-sm mt-6">
              THIS PRODUCT IS NOT YET AVAILABLE. IT WILL BE LAUNCHED IN THE COMING WEEKS. GET READY TO EXPERIENCE THE CONVENIENCE OF YIBZER AND STAY TUNED TO USE YOUR YCS CARD FOR MAXIMUM BENEFITS!
            </p>
          </div>
        </div>
      </div>
    )
  }




