import React from 'react'
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Navbar() {
    return (
        <div className=' container mx-auto '>
            <div className=' grid grid-cols-12 border-b-2 border-[#f2f2f2]'>
                <div className=' col-span-2'>
                    <div className=' py-8 heading text-[26px]'>
                        sneakers
                    </div>

                </div>
                <div className=' col-span-8 '>
                    <div className=' flex'>
                        <div className='text-grayish-blue py-10 px-6 hover:border-b-2 hover:border-primary hover:text-black hover:font-semibold duration-300 cursor-pointer leading-[26px]'>
                            Collection
                        </div>
                        <div className='py-10 px-6 border-b-2 border-primary text-black hover:font-semibold duration-300 cursor-pointer leading-[26px]'>
                            Men
                        </div>
                        <div className='text-grayish-blue py-10 px-6 hover:border-b-2 hover:border-primary hover:text-black hover:font-semibold duration-300 cursor-pointer leading-[26px]'>
                            Women
                        </div>
                        <div className='text-grayish-blue py-10 px-6 hover:border-b-2 hover:border-primary hover:text-black hover:font-semibold duration-300 cursor-pointer leading-[26px]'>
                            About
                        </div>
                        <div className='text-grayish-blue py-10 px-6 hover:border-b-2 hover:border-primary hover:text-black hover:font-semibold duration-300 cursor-pointer leading-[26px]'>
                            Contact
                        </div>
                    </div>


                </div>
                <div className='py-6 col-span-2 flex justify-end'>
                    <img src={cart} alt={"Cart"} className=' h-[20px] mx-4 my-3' />
                    <img src={avatar} className='h-[45px] border border-primary rounded-[50%]' alt="avatar" />
                </div>

            </div>

        </div>
    )
}
