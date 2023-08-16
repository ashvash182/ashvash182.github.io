import realsquattedsf from '../app/public/realsquattedsf.jpg'
import singleblob from '../app/public/singleblob.png'
import yoloimg from '../app/public/yoloimg.png'
import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <main class="flex flex-col items-center min-h-screen justify-between p-24">
      <div className="rounded-full">
        <Image src= {realsquattedsf} width={200} height={200} className="overflow-visible rounded" objectFit='cover'></Image>
      </div>
      <div class='max-w-[350px] items-center text-justify'>
        <p class='text-center'>
          Hey!
        </p>
        <br></br>
        <p className='text-justify'>
          I'm Ansh, a software engineer based out of Berkeley, CA with an interest in deep learning, full-stack engineering, and system design. This site is still in development,
          but here I'll be posting my personal projects and assorted thoughts on technology and other things I'm interested in.
        </p>
        <br></br>
        <p class='text-justify'>
          My most recent experiences are in developing and optimizing recursive machine learning models for demand forecasting and supply chain management, as well as deploying
          full-stack web applications in the cloud.
        </p>
        <br></br>
        <p class='text-center'>
          Please feel free to reach out to me at anshosca@gmail.com.
        </p>
        <br></br>
        <p class='text-center'>
          Thanks for stopping by!
        </p>
      </div>
      <div class='flex flex-row carousel'>
        <figure>
          <Image src= {singleblob} alt="Mountains" width={250} height={250} className='mr-3 object-none h-30 w-60'/>
          <figcaption>themeify</figcaption>   
        </figure>
        <figure>
          <Image src= {yoloimg} alt="Mountains" width={250} height={250} className='mr-3 object-none h-48 w-96'/>
          <figcaption>YOLO.mp4</figcaption>
        </figure>
      </div>
      <div class='flex flex-row'>

      </div>
    </main>
  )
}