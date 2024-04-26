import React from 'react'

export const Getintouch = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='text-center ml-5'>
                    <h6 className='text-secondary text-lg'>04. "What's Next?</h6>
                    <h4 className='mt-2 text-5xl text-slate300 font-semibold whitespace-nowrap px-5'>Get In Touch</h4>
                </div>
            </div>
            <div className='text-center'>
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-4">
                    <div>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-slate500 mx-auto max-w-7xl '>
                            My email is constantly open. I'll do my best to respond to you, whether you have a query or are just wishing to say hello! Please email me with any pertinent employment updates.
                        </p>
                        <div className='my-20 '>
                            <a href='mailto:mayurshimpi602@gmail.com' target='_blank' className='mx-auto w-[200px] flex items-center justify-center p-4  px-7 text-secondary text-xl font-medium border border-secondary rounded-lg hover:bg-secondary hover:text-navy500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span className='ml-4'>Mail Me </span>
                            </a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}
