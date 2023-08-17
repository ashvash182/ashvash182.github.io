import realsquattedsf from '../app/public/realsquattedsf.jpg'
import singleblob from '../app/public/singleblob.png'
import yoloimg from '../app/public/yoloimg.png'
import gitletimg from '../app/public/gitletimg.png'
import enigmaimg from '../app/public/enigmaimg.png'

import Image from 'next/image'
import Link from "next/link";
import './globals.css'

let projectSize = 250

export default function Home() {
  return (
    <main class="flex flex-col items-center min-h-screen justify-between p-24">
      <div class='image-cropper rounded-2xl'>
        <Image src= {realsquattedsf} width={300} height={200} class='rounded-full pfp-position'></Image>
      </div>
      <br></br>
      <div class='max-w-[375px] items-center text-justify'>
        <p class='text-center font-bold text-custom-xl'>
          Ansh Vashisth
        </p>
        <br></br>
        <p class='text-center'>
          Hey!
        </p>
        <br></br>
        <p className='text-justify'>
          I'm Ansh, a software engineer based out of Berkeley, CA with an interest in deep learning, full-stack engineering, and system design. 
        </p>
        <br></br>
        <p>
          This site is still in development,
          but here I'll be posting my personal projects and assorted thoughts on technology and other things I'm interested in.
        </p>
        <br></br>
        <p class='text-justify'>
          Some of my most recent experiences involve developing and optimizing recursive machine learning models for demand forecasting and supply chain management, as well as deploying
          full-stack cloud applications that leverage the power of open-source LLM's.
        </p>
        <br></br>
        <p class='text-center'>
          Please direct all inquiries to anshosca@gmail.com.
        </p>
        <br></br>
        <p class='text-center'>
          Feel free to browse some of my projects below. Thanks for stopping by!
        </p>
      </div>
      <br></br>
      <br></br>
      <div class='carousel w-250 h-250 carousel-center items-center space-x-3'>
        <Link href='https://github.com/ashvash182/themeify'>
          <figure>
            <Image src= {singleblob} alt="themeify project" width={projectSize} height={projectSize} className='rounded-2xl carousel-item mr-8' layout='Fill'/>
            <figcaption>themeify</figcaption>   
          </figure>
        </Link>

        <Link href='https://github.com/ashvash182/YOLO.mp4'>
          <figure>
            <Image src= {yoloimg} alt="yolo.mp4 project" width={projectSize} height={projectSize} className='rounded-2xl carousel-item mr-8' layout='Fill'/>
            <figcaption>YOLO.mp4</figcaption>
          </figure>        
        </Link>

        <Link href='https://docs.google.com/document/d/1re5lTCXAawPKRb8a2z8C0OfFqUiI7VLwLiWowHqROMU/edit'>
          <figure>
            <Image src= {gitletimg} alt="gitlet project" width={projectSize} height={projectSize} className='rounded-2xl carousel-item mr-8' layout='Fill'/>
            <figcaption>gitlet</figcaption>
          </figure>        
        </Link>

        <Link href='https://docs.google.com/document/d/1zSOUgM2QP-EBp1qUwWJa9F26nG8CVLIG4MscM1i5TjQ/edit'>
          <figure>
            <Image src= {enigmaimg} alt="enigma project" width={projectSize} height={projectSize} className='rounded-2xl carousel-item mr-8' layout='Fill'/>
            <figcaption>enigma</figcaption>
          </figure>        
        </Link>

      </div>
      <div class='flex flex-row'>

      </div>
    </main>
  )
}