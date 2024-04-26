import React from 'react';
import { SectionTitle } from '../sectionTitle';

export const About = () => {
    return (
        <div className='py-20'>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <SectionTitle number='01' title='About Me' />
                    <div className=' text-slate500 text-xl'>
                        <p className='mt-10'>
                            Hello! I'm Mayur Shimpi, from Dhule (Maharashtra).
                        </p>
                        <p className='my-4'>
                            I am a highly motivated, organized, creative, punctual, goal-oriented person with good moral principles and ethics. I also have excellent communication skills, a strong work ethic, and an exacting attention to detail.
                        </p>
                        <p>
                            I am pursuing my Bachelors from BBSPM College, Songir , Dhule(Maharashtra) in Computer Science (2017-2019) my current GPA is 3.7 out of 4.
                        </p>
                        <p className='my-4'>
                            These are a handful of my other favorite things to do!
                        </p>
                        <ol className='text-secondary list-disc	lg:pl-5'>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Coding</li>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Painting</li>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Reading</li>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Crafting</li>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Problem Solving</li>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Mentoring</li>
                            <li className='py-2 hover:pl-1 hover:text-white cursor-pointer'>Creativity</li>
                        </ol>
                    </div>
                </div>

                <div>
                    <div className='flex items-center lg:justify-end'>
                        <img
                            class="h-auto max-w-lg transition-all duration-300 rounded-xl cursor-pointer filter grayscale hover:grayscale-0"
                            src="/assets/mayur.jpg"
                            alt="Mayur Shimpi"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
