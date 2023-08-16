import realsquattedsf from '../app/public/realsquattedsf.jpg'
import singleblob from '../app/public/singleblob.png'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <main class="flex flex-col items-center min-h-screen justify-between p-24">
      <div className="">
        <Image src= {realsquattedsf} width={40} height={40} className=""></Image>
      </div>
      <div class='max-w-[350px] items-center text-justify'>
        <p className='text-justify'>
          Hey! I'm Ansh, a software engineer based out of Berkeley, CA with an interest in deep learning, full-stack applications, and system design.
        </p>
        <br></br>
        <p class='text-justify'>
          My most recent experiences are developing and optimizing recursive machine learning models for demand forecasting and supply chain management, as well as deploying
          full-stack web applications in the cloud.
        </p>
        <br></br>
        <p class='text-justify'>
          Please feel free to contact me at anshosca@gmail.com. Thanks for stopping by!
        </p>
      </div>
      <div class='flex'>
        <figure>
          <Image src= {singleblob} alt="Mountains" width={250} height={250} className='mr-3'/>
          <figcaption>themeify</figcaption>   
        </figure>
        <figure>
          <Image src= {realsquattedsf} alt="Mountains" width={250} height={250} className='mr-3'/>
          <figcaption>YOLO.mp4</figcaption>
        </figure>
      </div>
      <div class='for fun'>

      </div>
      <div class='contact'>

      </div>
      <div class='myspotify'>

      </div>
    </main>
  )
}