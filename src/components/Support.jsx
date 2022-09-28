import React from 'react'
import supportImg from '../assets/support.jpg';
const Support = () => {
    return (
        <div className='w-full h-screen mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
            </div>
            <div>
                <div>
                    <h2> Support </h2>
                    <h3>Finding the right team</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem assumenda nulla, deleniti adipisci nemo maxime itaque eligendi asperiores impedit minus eius quo facilis iste dolor error, quibusdam hic sed.</p>
                </div>
                <div>
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <h3>Sales</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod deleniti maiores commodi veniam velit animi eius dolore. Voluptatum nisi numquam, tempora harum, culpa iure laborum, fugiat laboriosam rem nostrum quas?</p>
                        </div>
                        <div>
                            <p>Contact Us <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support