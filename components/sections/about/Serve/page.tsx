// import Image from "next/image";

// const WhomWeServe = ()=>{
//     return (
//         <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20 ">
//             <div className="">
//                 <h2 className="">
//                     {/* //space-y-7 mt-10 px-6 sm:pl-20 md:pl-25 max-w-5xl */}
//                 Whom
//                 We
//                 <span className="gradient-text"> Serve</span>
//                 </h2>
//                 <p className="mt-3 text-gray-400 wrap-break-word">
//                     We work with all kinds of businesses, from Startups to SMB’s and Large-scale enterprises!
//                 </p>
//                 {/* text-base sm:text-lg md:text-xl  */}
//             </div>

//             <div className="max-w-312.75 min-h-71.75 border rounded-[10px] flex bg-[background: rgba(22,22,26,1);]">
//                 <div className="w-[60%] pl-18 min-h-71.75 mb-10">
//                     <div className="flex gap-6 items-center mt-[48px]">
//                         <div className="flex gap-6 p-2 w-12.5 h-12.5 rounded-[30px] border border-[rgba(48,48,56,1)] bg-[rgba(38,38,43,1)]"> 
//                             <Image
//                             src="/icons/streamline.svg"
//                             width={35}
//                             height={35}
//                             alt="" 
//                             className="border"
//                             />
//                         </div>
//                         <h2 className="gradient-text">Startups</h2>
//                     </div>

//                     <div className="mt-[33px]">
//                         <p className="text-base sm:text-lg md:text-xl text-gray-400 wrap-break-word">
//                             Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses.
//                         </p>
//                         <div className="flex items-center gap-16 pl-8 mt-6">
//                             <ul className="list1 list-disc">
//                                 <li>MVP Development Services </li>
//                                 <li>Rapid Prototyping Solutions</li>
//                                 <li>Scalable Architecture Design</li>
//                             </ul>
//                             <ul className="list2 list-disc">
//                                 <li>Lean & Agile Development</li>
//                                 <li>Product Validation and Testing</li>
//                                 <li>Growth Hacking Strategies</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="image w-1/2 min-h-71.75">
                    
//                     <Image
//                     src="images\about\startup-business.svg"
//                     alt="Business"
//                     width={568}
//                     height={398}
//                     className="rounded-r-[10px] min-h-71.75"
//                     />
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default WhomWeServe;



import Image from "next/image";

const WhomWeServe = () => {
  return (
    <div className="max-w-8xl mx-auto md:px-10 px-4 sm:px-6 lg:px-20 py-20">
      {/* Heading */}
      <div>
        <h2>
          Whom We <span className="gradient-text">Serve</span>
        </h2>
        <p className="mt-3 text-gray-400 break-words">
          We work with all kinds of businesses, from Startups to SMB’s and
          Large-scale enterprises!
        </p>
      </div>

      {/* Card */}
      <div className="max-w-312.75 min-h-71.75 border rounded-[10px] flex bg-[rgba(22,22,26,1)]">
        {/* Left Content */}
        <div className="w-[60%] pl-18 min-h-71.75 mb-10">
          <div className="flex items-center gap-6 mt-[48px]">
            <div className="flex items-center justify-center w-12.5 h-12.5 rounded-[30px] border border-[rgba(48,48,56,1)] bg-[rgba(38,38,43,1)]">
              <Image
                src="/icons/streamline.svg"
                width={35}
                height={35}
                alt="Startup Icon"
              />
            </div>
            <h2 className="gradient-text">Startups</h2>
          </div>

          <div className="mt-[33px]">
            <p className="text-base sm:text-lg md:text-xl text-gray-400 break-words">
              Empowering startups with agile and scalable technology solutions
              that help turn innovative ideas into successful businesses.
            </p>

            <div className="flex items-start gap-16 pl-8 mt-6">
              <ul className="list-disc">
                <li>MVP Development Services</li>
                <li>Rapid Prototyping Solutions</li>
                <li>Scalable Architecture Design</li>
              </ul>

              <ul className="list-disc">
                <li>Lean & Agile Development</li>
                <li>Product Validation and Testing</li>
                <li>Growth Hacking Strategies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 min-h-71.75">
          <Image
            src="/images/about/startup-business.svg"
            alt="Startup Business Illustration"
            width={568}
            height={398}
            className="rounded-r-[10px] min-h-71.75 object-cover"
          />
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}

      <div className="max-w-312.75 min-h-71.75 border rounded-[10px] flex bg-[rgba(22,22,26,1)]">
        {/* Left Content */}
        <div className="w-[60%] pl-18 min-h-71.75 mb-10">
          <div className="flex items-center gap-6 mt-12">
            <div className="flex items-center justify-center w-12.5 h-12.5 rounded-[30px] border border-[rgba(48,48,56,1)] bg-[rgba(38,38,43,1)]">
              <Image
                src="/icons/building.svg"
                width={35}
                height={35}
                alt="Startup Icon"
              />
            </div>
            <h2 className="text-gray-400">Small & Medium Sized <span className="gradient-text">Businesses</span></h2>
          </div>

          <div className="mt-[33px]">
            <p className="text-base sm:text-lg md:text-xl text-gray-400 break-words">
              Empowering startups with agile and scalable technology solutions
              that help turn innovative ideas into successful businesses.
            </p>

            <div className="flex items-start gap-16 pl-8 mt-6">
              <ul className="list-disc">
                <li>MVP Development Services</li>
                <li>Rapid Prototyping Solutions</li>
                <li>Scalable Architecture Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 min-h-71.75">
          <Image
            src="/images/about/startup-business.svg"
            alt="Startup Business Illustration"
            width={568}
            height={398}
            className="rounded-r-[10px] min-h-71.75 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhomWeServe;
