import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function InputSearch({setShowSearchBox, showSearchBox}) {

  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    console.log("i ran")
    if(searchValue == ""){
      setShowSearchBox(false);
      return;
    }
    setSearchValue("");
  }

  return (
    <div className={`sm:flex justify-start items-center bg-gray-100 rounded-3xl p-2.5 gap-1  sm:flex-1/3 absolute w-full  z-1 ${!showSearchBox ? 'hidden' : 'flex'} sm:relative`} >
        <div id='icon-search'><IoIosSearch className='text-2xl text-gray-500 cursor-pointer'/></div>
        <input type="text" id="id" placeholder='Search for Products...' className='focus:outline-0 w-full' autoComplete='none' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <div id="icon-cut" className='absolute right-2.5' onClick={() => handleClear()}>
            <IoMdClose className='text-2xl text-gray-500 cursor-pointer' />
        </div>
    </div>
  )
}

export default InputSearch