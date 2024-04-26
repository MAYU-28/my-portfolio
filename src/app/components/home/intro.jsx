import React from 'react'

export const Intro = () => {
    return (
        <div className='py-20'>
            <div>
                <h4 className='lg:text-2xl text-medium text-secondary'>Hello, my name is</h4>
                <h3 className='lg:text-[80px] font-bold text-slate300'>Mayur Shimpi.</h3>
                <h3 className='lg:text-[80px] font-bold text-slate500'>I love exploring new things!</h3>
                <p className='mt-10 text-slate500 text-xl lg:w-[50%]'>
                    I'm a Final Year Computer Science Student at BSSPM College Songir, Dhule, Maharashtra. Primarily interested in Frontend Web Development .
                </p>
                <p className='mt-5 text-slate500 text-xl lg:w-[50%]'>
                    I enjoy learning new skills and implementing them in real life!
                </p>
                <button className='px-8 py-4 border border-secondary text-secondary text-lg mt-16 rounded'>
                    Get In Touch
                </button>
            </div>
        </div>
    )
}
