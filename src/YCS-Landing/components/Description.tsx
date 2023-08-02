import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal'


export const Description = () => {
  
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.fadeInUp', {
      origin: 'top',
      distance: '40px',
      duration: 1000,
      delay: 200,
      opacity: 0,
      easing: 'ease',
      reset: false,
    });

    // Agrega más configuraciones de animación si lo deseas para otros elementos

    return () => {
      sr.destroy(); // Limpia los listeners de ScrollReveal cuando el componente se desmonta
    };
  }, []);


  return (
    
        <section className="text-gray-200 pt-36 pb-80 bg-[#009AFA] text-center flex-col flex justify-center items-center">
         <div className="w-[70%] fadeInUp">
          <h2 className="text-5xl font-bold mb-20 w-[80%] mx-auto py-8 rounded bg-[#0369A1] drop-shadow-2xl shadow-2xl">Elevate Your Restaurant with <br /> Next-Gen Software Solutions</h2>
          <p className="mb-6 text-xl">Welcome to YCS PR Corp - <b> Your Expert Restaurant Technology Partner</b></p>
          <p className="mb-6 text-xl">Embark on a journey of seamless <b>digital transformation</b> with YCS PR Corp, the leading name in Software Development for Restaurants. Based in Puerto Rico and established in 2011, we are the driving force behind the success stories of countless restaurants in Puerto Rico and the vibrant Caribbean.</p>
          <p className="mb-6 text-xl">Our passion lies in creating bespoke <b>Software solutions tailored to your restaurant's unique needs </b>. From pioneering custom integrations for credit card processing in Points of Sale (POS) to providing web and mobile development that dazzles, we are your trusted partner in enhancing every aspect of your restaurant's operations.</p>
          <p className="mb-6 text-xl">Unlock the full potential of your business with our cutting-edge technology, streamlined user interfaces, and expert consulting. With YCS PR Corp as your guiding force, your restaurant will be equipped with the tools to thrive in today's fast-paced digital landscape.</p>
          <p className="mb-6 text-xl">Experience the power of seamless software solutions - <strong>Elevate your restaurant's efficiency, delight your customers, and drive revenue growth</strong>. Partner with YCS PR Corp today and witness the transformation that only visionary technology can bring.</p>
          <p className="mb-6 text-xl">Are you ready to lead the restaurant industry in the Caribbean? Contact us now and take the first step towards a future of innovation and success. Welcome to a new era of restaurant excellence - Welcome to YCS PR Corp.</p>
          </div>
        </section>
  )
}
