import React, { useState} from "react";
import { ALPHABET_LIST } from '../../utils/helper'
const Tabs = () => {
    const [selectedLetter, setSelectedLetter] = useState("");
    const handleChange = (letter) => {
        const newName = letter.toUpperCase();
        setSelectedLetter(newName);
    };

    return (
      <div className="border-y pt-[42px] border-gray pb-[37px] bg-off-white">          
            <div className="container">
                <div className="flex items-center lg:justify-center lg:gap-1 gap-6 max-xl:overflow-x-auto">
                    {ALPHABET_LIST.map((item, index) => (
                        <p
                            onClick={() => handleChange(item)}
                            key={index}
                            className={`flex items-center cursor-pointer hover:bg-customBlack max-sm:pt-[5px] max-sm:pb-[6px] max-sm:pr-[10px] max-sm:pl-[11px] size-[30px] justify-center rounded-full transition-all duration-300 hover:text-white hover:font-medium text-black text-xs leading-custom-xl ${selectedLetter === item.toUpperCase() ? "bg-customBlack text-white" : ""}`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
          </div>
        </div>
  )
}

export default Tabs