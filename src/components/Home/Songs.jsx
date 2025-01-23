import React, { useState } from 'react';
import { SONGS_LIST } from '../../utils/helper';

const Songs = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showCrossIcon, setShowCrossIcon] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
    setShowCrossIcon(true);
  };

  const handleAddPlaceClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImageUrl(null);
    setShowCrossIcon(false);
  };

  return (
    <div className='bg-off-white'>
      <div className='container'>
        <h2 className='font-semibold lg:text-5xl md:text-4xl text-3xl text-black'>Songs</h2>
        <div className="flex justify-between items-center pb-[35px] overflow-x-auto gap-[60px]">
          <div className='lg:w-8/12 md:w-7/12 w-full '>
            <div className=' whitespace-nowrap'>
              <table className='w-full'>
                <thead>
                  <tr className='pb-[33px]'>
                    <th></th>
                    <th className='font-semibold text-sm  text-black text-left sm:w-6/12 w-5/12 pb-[33px]'>Song</th>
                    <th className='font-semibold text-sm  text-black text-left pb-[33px] pr-6'>Release Date</th>
                    <th className='font-semibold text-sm  text-black pb-[33px] text-right'>Times Played</th>
                  </tr>
                </thead>
                <tbody>
                  {SONGS_LIST.map((song, index) => (
                    <tr key={index} className=''>
                      <td className='text-off-black text-sm lg:pb-[44px] pb-7 max-lg:pr-5 '>{String(index + 1).padStart(2, '0')}</td>
                      <td className='font-semibold text-sm  text-black lg:pb-[44px] pb-7 max-lg:pr-5'>{song.title}</td>
                      <td className='text-lightBlack font-normal text-xs lg:pb-[44px] pb-7'>Nov 4, 2023</td>
                      <td className='text-lightBlack font-normal text-xs text-right lg:pb-[44px] pb-7 '>{song.timesPlayed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='relative lg:w-[300px] lg:h-[580px] md:w-[250px] md:h-[460px] w-full h-[400px]'>
            {imageUrl ? (
              <>
                <img src={imageUrl} alt="Selected" className='w-full h-full object-cover rounded-[20px]' />
                {showCrossIcon && (
                  <div
                    className='absolute top-2 right-2 text-white bg-black rounded-full cursor-pointer flex items-center justify-center'
                    style={{ width: '24px', height: '24px' }}
                    onClick={handleRemoveImage}
                  >
                    <span style={{ fontSize: '18px', lineHeight: '24px' }}>×</span>
                  </div>
                )}
              </>
            ) : (
              <div className='w-full h-full bg-blue text-sm font-normal max-sm:ml-16 text-center text-white whitespace-nowrap px-[105px] rounded-[20px] flex items-center justify-center cursor-pointer' onClick={handleAddPlaceClick}>
                Add Place
              </div>
            )}
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Songs;