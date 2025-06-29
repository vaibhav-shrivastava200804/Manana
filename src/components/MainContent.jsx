import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Heart from "../assets/Heart.gif"
import { Link } from 'react-router-dom';
function MainContent() {
  return (
    <div className='p-5 flex flex-col jusitfy-between gap-5 border h-[100vh]'>
        <div className="image w-max flex mx-auto border-2 border-red-300 rounded-full shadow-2xl">
            <img src={Heart} alt="" className='rounded-full h-72 w-72'/>
        </div>
        <div className="heading">
            <h1 className='text-4xl text-center font-semibold text-red-300'>I'm <span className='font-bold bg-gradient-to-tr from-rose-500 to-pink-500 bg-clip-text text-transparent text-6xl'>SORRY</span></h1>
        </div>
        <div className="info border p-2 text-lg text-justify font-bold bg-gradient-to-tr from-rose-500 to-pink-500 bg-clip-text text-transparent">
            <p className=''>I messed up, and I know it. You mean the veryyy muchh to me to me, and I can't bear the your silence over my mistakes.... Let your anger out and but please don't get silent</p>
        </div> 
        <div className="flex justify-center gap-2">
            <a className='text-white flex gap-4 bg-gradient-to-tr from-rose-300 to-pink-400 items-center border border-white rounded-2xl px-5 py-2' href='https://www.instagram.com/direct/inbox/' target='_blank'>
                <FontAwesomeIcon icon={faCommentDots} />
                <p>Let's Talk</p>
            </a>

            <Link className='text-white flex gap-4 items-center border-2 bg-white border-pink-500 rounded-2xl px-5 py-2' to={'/Forgive_Me'}>
                <FontAwesomeIcon icon={faHeart} className='text-rose-400 text-2xl' />
                <p className='bg-gradient-to-tr from-rose-500 to-pink-500 bg-clip-text text-transparent font-bold'>Please Forgive Me</p>
            </Link>
        </div>
    </div>
  )
}

export default MainContent