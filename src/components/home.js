import React from 'react'
import images from '../assets/images'

const home = () => {
  return (
    <main>
      <img src={images.bgpic} alt = 'background' className=' absolute object-cover w-full h-full'/>
      <section className=' relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className=' text-6xl text-green-100 font-bold leading-none lg:leading-snug home-name'>Nomoskar🙏🏽. I'm Riki</h1>
      </section>
    </main>
  )
}

export default home