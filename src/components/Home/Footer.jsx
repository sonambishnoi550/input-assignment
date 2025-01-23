import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='lg:pt-[67px] pt-10 bg-off-white pb-[30px]'>
            <div className="container max-w-[1141px] mx-auto">
                <div className="flex max-lg:flex-wrap justify-between lg:pb-[89px] pb-10 max-lg:gap-[60px] max-md:gap-[30px]">
                    <div>
                        <h3 className='text-sm text-black font-semibold leading- custom-3xl pb-[37px] pt-6'>LyricS Web</h3>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Home</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>About Us</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Help</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Contact us</p>
                        <p className='text-sm font-normal leading-custom-3xl'>Press</p>
                    </div>
                    <div>
                        <h3 className='text-sm text-black font-semibold leading- custom-3xl pb-[37px] pt-6'>Songs</h3>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Top Songs</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Releases</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Add a new song</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Your Playlist</p>
                    </div>
                    <div>
                        <h3 className='text-sm text-black font-semibold leading- custom-3xl pb-[37px] pt-6'>Artist</h3>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Top Artists</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Top Albums</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Add a new song</p>
                        <p className='text-sm font-normal leading-custom-3xl pb-[22px]'>Latest News</p>
                    </div>
                    <div>
                        <h3 className='text-sm text-black font-semibold leading- custom-3xl pb-[26px]'>Follow us</h3>
                        <a href="https://www.facebook.com/" target='_blank' className='bg-white py-3 pl-[25px] pr-[14.45px] rounded-[10px] flex justify-between gap-[160px] mb-[14px]'>
                            <p className='text-sm text-black font-semibold leading- custom-3xl pt-1'>Facebook</p>
                            <img src="./assets/images/svg/facebook.svg" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target='_blank' className='bg-white py-3 pl-[25px] pr-[14.45px] rounded-[10px] flex justify-between gap-[160px] mb-[14px]'><p className='text-sm text-black font-semibold leading- custom-3xl pt-1'>Instagram</p>
                            <img src="./assets/images/svg/instagram.svg" alt="instagram" /></a>
                        <a href="https://www.instagram.com/" target='_blank' className='bg-white py-3 pl-[25px] pr-[14.45px] rounded-[10px] flex justify-between gap-[160px] mb-[14px]'>
                            <p className='text-sm text-black font-semibold leading- custom-3xl pt-1'>Youtube</p>
                            <img src="./assets/images/svg/youtube.svg" alt="youtube" />
                        </a>
                        <a href="https://in.pinterest.com/" target='_blank' className='bg-white py-3 pl-[25px] pr-[14.45px] rounded-[10px] flex justify-between gap-[160px] mb-[14px]'><p className='text-sm text-black font-semibold leading- custom-3xl pt-1'>Pinterest</p>
                            <img src="./assets/images/svg/pinterest.svg" alt="pinterest" /></a>
                    </div>
                </div>
            </div>
            <div className='border-b w-full border-gray'></div>
            <div className='flex md:justify-between max-w-[1141px] mx-auto pt-[41px] px-4 max-sm:flex-col justify-center'>
                <p className='text-sm font-normal leading-custom-3xl max-sm:text-center'>All rights reserved to Global Media Holdings Ltd. {currentYear}</p>
                <div className='flex gap-[41px] max-sm:justify-center max-sm:pt-4'>
                    <p className='text-sm font-normal leading-custom-3xl'>Privacy Policy</p>
                    <p className='text-sm font-normal leading-custom-3xl'>Terms of Use</p>
                </div>
            </div>
        </div>
    )
}

export default Footer