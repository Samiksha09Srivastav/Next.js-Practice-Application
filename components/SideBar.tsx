import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className=''>
        <section className='w-[240px] bg-white border-gray-800 rounded-xl ml-[55px] m-4 shadow '>
            <Image
                src='/main.jpg'
                alt="Picture of the author"
                width={240} 
                height={65} 
                style={{borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}}
            />

            <div className='text-center shadow'>
                <Image 
                    src='/profile.png'
                    alt='circular photo'
                    width={90}
                    height={110}
                    style={{borderRadius:"10%", position:"absolute", top:"60px", left: '127px',  }}
                />
                <h3 className='mt-10 text-cyan-700 text-black font-serif text-base'>Welcome to Our CSR Network!</h3>
            </div>

            <h4 className='text-justify text-gray-600 text-sm p-2 font-serif'>
            Join us on this journey of collective impact where innovative ideas, shared resources, and collaborative efforts converge to create a better and more sustainable future. 
            </h4>

            
        </section>

        <section className='w-[240px] bg-white border-gray-800 rounded-xl ml-[55px] m-4 p-2 shadow '>
            
            <Link href='#' className=' mb-2'>
                <h4 className='text-cyan-700 text-sm p-2 font-serif border-b-2' >Education and Skill Development</h4>
            </Link>
            <Link href='#' className=' mb-2'>
                <h4 className='text-cyan-700 text-sm p-2 font-serif border-b-2' >Technology for Good</h4>
            </Link>
            <Link href='#' className=' mb-2'>
                <h4 className='text-cyan-700 text-sm p-2 font-serif border-b-2 '>Employee Well-being</h4>
            </Link>
            <Link href='#' className=' mb-2'>
                <h4 className='text-cyan-700 text-sm p-2 font-serif '>Community Outreach</h4>
            </Link>
        </section>

    </div>
  );
}

export default SideBar;
