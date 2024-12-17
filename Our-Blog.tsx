export default function Our(){
    return(
        <>
        <div className="w-full bg-[#FFFFFF] justify-center">
            <h1 className="font-medium text-4xl leading-[54px] text[#000000] text-center">Our Blogs</h1>
            <p className="font-medium text-base leading-6 text-[#9F9F9F] text-center">Find a bright ideal to suit your taste with our great selection</p>
        </div>
        <div className="w-full justify-evenly flex items-center">
            <div className="flex flex-col items-center mt-16">
            <img src="blog-1.png"
            width={300}
            height={300}
             alt="image" />
             <p className="font-normal text-xl leading-[30px] texxt[#000000] mt-6">Going all-in with millennial design</p>
             <img className="text-[#000000]" src="blog-4.png"
             width={80}
             height={80}
              alt=""
              />
              <div className="mt-4 text-[#000000]">
                <img src="blog-5.png"
                width={100}
                 alt="" />
              </div>
              </div>
            <div className="flex flex-col items-center mt-16"> 
            <img src="blog-2.png"
            width={300}
            height={300}
             alt="image" />
             <p className="font-normal text-xl leading-[30px] texxt[#000000] mt-6">Going all-in with millennial design</p>
             <img className="text-[#000000]" src="blog-4.png"
             width={80}
             height={80}
              alt=""
              />
              <div className="mt-4 text-[#000000]">
                <img src="blog-5.png"
                width={100}
                 alt="" />
              </div>
              
            </div>
             
             <div className="flex flex-col items-center mt-16">
            <img src="blog-3.png"
            width={300}
            height={300}
             alt="image" />
             <p className="font-normal text-xl leading-[30px] texxt[#000000] mt-6">Going all-in with millennial design</p>
             <img className="text-[#000000]" src="blog-4.png"
             width={80}
             height={80}
              alt=""
              />
              <div className="mt-4 text-[#000000]">
                <img src="blog-5.png"
                width={100}
                 alt="" />
              </div>
             </div>

             
             
        </div>

        <div className="text-center">
           <button className="font-medium text-xl leading-[30px] text-[#000000] text-center mt-8 border-b-2 border-black " >  
            View All Post
             </button> 

         </div> 

        </>
    )
}