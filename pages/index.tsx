import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from "../components/Navbar";
import { Grid, Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
const Home: NextPage = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
	const [width, setWidth] = useState(764);
	const [height, setHeight] = useState(440);
  const isProd = process.env.NODE_ENV === 'production';
  const getMobile = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		if (window.innerWidth < 905) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};
	if (!isProd) {
		useEffect(() => {
			getMobile();
			window.addEventListener("resize", getMobile);
		});
	} else {
		useEffect(() => {
			getMobile();
		});
	}
  return (
    <div>
      <Head>
        <title>Home</title>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />

      </Head>
      <Navbar mobile={mobile} />
      <div className="hero">
        <Image src="/greenForest.jpeg" layout="fill" objectFit='cover' style={{zIndex: -1}} />
        <div>
          <h1>Make Georgia Green</h1>
          <p>Georgia is brown... the oppsite of green</p>
          <Button css={{
            margin: '0 auto',
          }} color="white" onClick={() => {
            router.push('/#learn');
          }}>Learn More</Button>
        </div>
        <p className="caption"> <i className='bx bxs-map'></i> Augusta, Georgia </p>
      </div>
      <div className="content">
        <div className="items">
          <div className="item">
            <h1>
              Our Mission:
            </h1>
            <h2>
              Make Georgia's communities green one inititave at a time. 
            </h2>
          </div>
          <div className="item">
            <h2>Why we do what we do:</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home
