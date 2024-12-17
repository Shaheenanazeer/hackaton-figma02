export default function Side(){
    return(
        
        
<div className="flex justify-center min-h-screen bg-[#FAF4F4]">
  {/* 1st image */}
  <div className="text-center">
        <img src="/side-table-1.png"
         width={500} 
         height={500} 
         alt="image" />
        <div className="font-medium text-4xl leading-[54px] text-[#000000]">Side table</div>
        <div>
          <button className="border-b-2 border-black font-semibold leading-10 text-[#000000]  ">
            View More
            </button>
        </div>
         </div>
         {/* 2nd image */}
         <div className="text-center">
          <img 
          src="/side-table-2.png"
           width={500} 
           height={500} alt="" 
          
           />
          <div className="">
          <div className="font-medium text-4xl leading-[54px] text-[#000000]">
            Side table
            </div>
            <button className="border-b-2 border-black leading-10 font-semibold  ">
            View More
            </button>
        </div>       
        </div>
        </div>
        

    );
};
