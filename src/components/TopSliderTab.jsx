import React from 'react'
import { useState } from 'react'

const TopSliderTab = () => {
  const [activeTab , setActiveTab] = useState("For You")
  let styleForActiveTab = ["text-white font-bold"]
  let styleUnactiveTab = ["text-white opacity-60 hover:text-green-600 hover:opacity-100 "]
  let tabName = ["For You", "bokep", "Drama", "K-Drama", " Movie", "Anime", "Variety Show"]

  return (
      <div className={"pl-4 flex text-slate-200 no-scrollbar overflow-x-scroll md:hidden"}>
        {tabName.map(tab=>{
          return (
            <div
              key={tab}
              className={`py-1 pr-4 text-[1.1rem]  min-w-[fit-content] ${activeTab === tab ? [styleForActiveTab] : [styleUnactiveTab]}`}>
              {tab}
            </div>
          )
        })}
      </div>
  )
}

export default TopSliderTab