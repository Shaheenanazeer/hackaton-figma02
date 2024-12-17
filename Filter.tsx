
import { LayoutGrid, List, Filter } from 'lucide-react'

export default function FilterPage() {
  return (
    <div className="w-full  px-4 bg-[#FAF4F4]">
      <div className="flex items-center justify-between py-4 border-b">
  
        <div className="flex items-center gap-4">
        <img src="shop2.png" alt="" />
          <button className="px-3 py-1 text-sm flex items-center gap-2">
            Filter
          </button>
          <div className="flex items-center">
            <button className="px-3 py-1">
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button className="px-3 py-1 border-l">
              <List className="h-4 w-4" />
            </button>
          </div>
          <span className="text-sm text-gray-500">
            Showing 1-16 of 32 results
          </span>
        </div>
        <div className=" flex items-center gap-6">
          <div className="font-normal text-xl leading-[30px] text[#000000]">Show</div>
          <div className=" px-2 py-1">
            <div className="w-full text-[#9F9F9F] bg-[#FFFFFF] p-2 font-normal text-xl leading-[30px] text[#000000]">16</div>
          </div>
          <div className="flex items-center ">
          <div className="font-normal text-xl leading-[30px] text[#000000] ">Short by</div>
          <div className=" py-4 px-4">
            <div className="w-[188px] h-[55px] px-14 py-2 bg-[#FFFFFF] text-[#9F9F9F] font-normal text-xl leading-[30px] text[#000000]">default</div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

// 2page