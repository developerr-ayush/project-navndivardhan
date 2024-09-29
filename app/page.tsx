import { About } from '@/components/about';
import { Showcase } from '@/components/showcase';
import React from 'react'

export default function Home() {
  return (
    <>
      <Showcase />
      <h2 className='text-[5vw] text-center py-10 text-[#b2b3b3]'>Transforming Spaces, Elevating Lives</h2>
      <About />
    </>
  );
}
