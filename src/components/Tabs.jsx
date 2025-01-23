import React from 'react'
import { ALPHABET_LIST } from '../utils/helper'
const Tabs = () => {
  return (
      <div className="flex items-center ">
          {ALPHABET_LIST.map((item, index) => (
              <p
                  onClick={() => handleChange(item)}
                  key={index}
                  className={`flex items-center cursor-pointer hover:bg-customBlack size-[30px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${selectedLetter === item.toUpperCase() ? "bg-customBlack text-white" : ""}`} // Apply active styles
              >
                  {item}
              </p>
          ))}
      </div>
  )
}

export default Tabs