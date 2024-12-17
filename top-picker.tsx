export default function Top(){
    return( 
        <>
        <div className="w-full bg-[#FFFFFF] justify-center ">
        <div className="font-medium text-4xl leading-[54px] text-[#000000] text-center">Top Picks For You</div>
        <div className="font-medium text-base leading-6 text-[#9F9F9F] text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>
        </div>

        <div className="flex justify-evenly items-center space-x-8">
            <div className="flex flex-col items-center  ">
          <img src="top-picks-1.png"
          width={200}
          height={200} 
          alt="image" />
        <div className="font-normal text-base leading-6- text-[#000000] mt-4">Trenton modular sofa_3</div>
        <div className="font-medium text-2xl leading-9 text-[#000000]">Rs. 25,000.00</div>
        </div>
    
    
        <div className="flex flex-col items-center pt-4">
          <img  src="/tp-picks-2.png"
          width={200}
          height={200}
           alt="image" />
        
        <div className="font-normal text-base leading-6 text-[#000000] mt-14">Granite dining table with dining chair</div>
        <div className="font-medium text-2xl leading-9 text-[#000000]v">Rs. 25,000.00</div>
     </div>

     <div>
        <img src="top-picks-3.png" 
        width={200}
        height={200}
        alt="image" />
        <p className="font-normal text-base leading-6 text-[#000000] mt-10">Outdoor bar table and stool</p>
        <p className="font-medium text-2xl leading-9 text-[#000000]">Rs. 25,000.00</p>
     </div>

     <div>
        <img src="top-picker4.png"
        width={200}
        height={200}
         alt="image"
          />
        <p className="font-normal text-base leading-6 text-[#000000] mt-20">Plain console with teak mirror</p>
          <p className="font-medium text-2xl leading-9 text-[#000000]">Rs. 25,000.00</p>
        </div>
        
      </div>

      <div className="flex justify-center pt-10">
      <button className="font-medium text-xl leading-[30px]">View More</button>
      </div>
      </>
    )

    
}