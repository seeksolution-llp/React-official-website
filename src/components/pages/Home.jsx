import React from "react";

import touch2 from "../../assets/slider-tech2.jpg";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import frelance1 from "../../assets/freelancing.png";
import frelance2 from "../../assets/freelancing2.png";
import frelance3 from "../../assets/freelancing3.jpg";
import { Link } from "react-router-dom";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import FactoryIcon from '@mui/icons-material/Factory';
import RocketIcon from '@mui/icons-material/Rocket';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Banner from "./Banner";

 import data from "../../components/image_json/cumpony.json"
import ComSlider from "./ComSlider";




const Home = () => {
  return (
    <>
     <Banner />

      {/* Innovitt Global section start here */}

   
      <ComSlider />
      {/* Innovitt Global section end here */}

      {/* We work start here */}
      <div className=" w-[100%] mx-auto mt-5  ">
        <div className=" max-w-[1320px] mx-auto  ">
          <h1 className=" text-center text-4xl pb-8 font-mono font-semibold ">
            Platforms We Work
          </h1>
        </div>

        <div className=" max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-[10px]   ">
          {/* card start here */}
          <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-full "
                src="https://innovittglobal.com/assets/images/platform/Mobile.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mobile(Anroid & ios)
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                An App Developer for Forrester Research to Your Gadgets
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-10  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
          {/* card end here */}

          {/* card start here */}
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-full"
                src="https://innovittglobal.com/assets/images/platform/React&NodeJS.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  React js & Node js
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                It can be executed both client and server side its design to
                work that reduce lines of code making server side easy.
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-10  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
          {/* card end here */}

          {/* card start here */}
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-full"
                src="https://innovittglobal.com/assets/images/platform/MEAN.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  MERN Stack
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                It refers to the development process that falls within these
                particular set of technologies MongoDB, Expressjs, AngularJs,
                NodeJS.
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-10  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
          {/* card end here */}

          {/* card start here */}
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-full"
                src="https://innovittglobal.com/assets/images/platform/PythonDjango.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Python(Django){" "}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Web Framework That Enables Rapid Development of Websites
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-10  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
          {/* card end here */}

          {/* card start here */}
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-full"
                src="https://innovittglobal.com/assets/images/platform/IOT&Blockchain.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  IoT & Blockchain
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Make Machine-to-Machine Transactions Possible
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-10  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
          {/* card end here */}

          {/* card start here */}
          <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg w-full"
                src="https://innovittglobal.com/assets/images/platform/Java.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  JAVA(JSP){" "}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                In the world of full of errors and warnings, Be with someone who
                can handle your exceptions none other than JAVA.
              </p>
               <button className=" text-white btn  font-semibold   px-3 py-2 my-10  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
          {/* card end here */}
        </div>
      </div>
      {/* We work end here */}

      {/* GET strted start here */}

      <div className=" getStart w-full   my-10 text-center   text-white  ">
        <div className=" gap-4 py-10 px-20 flex">
          <div className=" flex-3 text-2xl">
            <h1>
              Trusted by Over <span className="text-[#00cbb8]  "> 1500+</span>{" "}
              Clients & Associate Around <br /> the World!
            </h1>
            <button className=" btn font-semibold   px-3 py-2 my-10  rounded-md border border-white mt-20  ">
              Get Started Now
            </button>
          </div>
          <div className=" flex-1"></div>
        </div>
      </div>

      {/* GET strted end here */}

      {/* Unique Features strt here */}
      <div className=" mt-5">
        <div className=" max-w-[1320px] mx-auto  ">
          <h1 className=" text-center text-4xl  font-semibold my-5 ">
          Unique Features
          </h1>
        </div>

          <div className="w-[80%] mx-auto">
          <div className=" max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-[20px]   ">
        
             {/* card start here */}
        
         <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-5 flex flex-col justify-center items-center py-12 px-8">
          <div class=" text-white bg-green-600 p-8 rounded-full      ">
              <CloudQueueIcon />
             </div>
            <div class="px-5 text-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Summer/Winter Internship
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Summer/Winter Internships or Training are 'practical avenues of knowledge and learning' made compulsory in a number of professional curricula and courses.
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-5  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
            {/* card end here */}

                {/* card start here */}
        
         <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-5 flex flex-col justify-center items-center py-12 px-8">
          <div class=" text-white bg-yellow-600 p-8 rounded-full      ">
              <FactoryIcon />
             </div>
            <div class="px-5 text-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Industrial Internship
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Industry-based internships or training act as a bridge between the classroom theories and their practical applications in the workplace.
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-5  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
            {/* card end here */}


                {/* card start here */}
        
         <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-5 flex flex-col justify-center items-center py-12 px-8">
          <div class=" text-white bg-sky-600 p-8 rounded-full      ">
              <HomeRepairServiceIcon />
             </div>
            <div class="px-5 text-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Job Oriented Training
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Job oriented training empowers people to realize their dream and improve their lives. This program emphasizes on real time live project work & environment learning.
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-5  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
            {/* card end here */}


                {/* card start here */}
        
         <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-5 flex flex-col justify-center items-center py-12 px-8">
          <div class=" text-white bg-red-700 p-8 rounded-full      ">
              <RocketIcon />
             </div>
            <div class="px-5 text-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Project Training
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A project-based internship or training is an unpaid or paid learning process which offers great benefits to both the student and the host.
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-5  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
            {/* card end here */}


                {/* card start here */}
        
         <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-5 flex flex-col justify-center items-center py-12 px-8">
          <div class=" text-white bg-blue-500 p-8 rounded-full      ">
              <SecurityIcon />
             </div>
            <div class="px-5 text-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                UI/UX Training
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              UI/UX design is the prcess of creating evidence-based, interaction desins between human users and products or websites .
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-5  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
            {/* card end here */}


                {/* card start here */}
        
         <div className="h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 gap-5 flex flex-col justify-center items-center py-12 px-8">
          <div class=" text-white bg-black p-8 rounded-full      ">
              <TrendingUpIcon />
             </div>
            <div class="px-5 text-center">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Personality Development , GD & PI 
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A PD training is a developmental programmed for enhancing or personality . It helps us in improvig our confidence levels .
              </p>
              <button className=" text-white btn  font-semibold   px-3 py-2 my-5  rounded-md  border border-white ">
            Read More
          </button>
            </div>
          </div>
            {/* card end here */}


         </div>
            
          </div>
           
        </div>
  
      {/* Unique Features end here */}

      {/* card section start here */}
   
    

      {/* <!-- Content after cards --> */}
      <div className="w-[80%] mx-auto my-10">
        <div className="  text-center flex">
          <div className=" flex-1">
            <h1 className="text-5xl font-semibold leading-tight">
              Quality Assurance (QA) & Software Testing Services
            </h1>
            <p className="text-lg font-semibold text-gray-600 my-4 pr-10">
              As a leading Software Testing Company in USA We provides
              full-cycle Quality Assurance (QA) and as well as Manual,
              Automation & Performance software testing services to diverse
              industries across multiple business domains. Our QA specialists
              Ensure Your Next Gen Applications are Bug Free
            </p>
          </div>
          <div className="content-image  mr-24 ml-1 mt-5 flex-2">
            <img src={touch2} className="object-cover w-96 h-72" alt="image" />
          </div>
        </div>
      </div>
      {/* <!-- Our Recent projects --> */}

      <div class="recent-projects text-center my-10  ">
        <h1 class="text-3xl font-bold pb-5">Our Recent Projects</h1>
        <p class="font-medium text-gray-500">
          Software development outsourcing is just a tool to achieve business
          goals. But there is no way <br />
          to get worthwhile results without cooperation and trust between a
          client and company.
        </p>

        <div class="projectContainer mx-20 my-10">
          <div class="projectBox flex flex-wrap ">
            <Link className="mx-3 my-3">
              <img src={project1} alt="" className="w-80 h-80" />
            </Link>
            <Link className="mx-3 my-3">
              <img src={project2} alt="" className="w-90 h-80" />
            </Link>
            <Link className="mx-3 my-3">
              <img src={project3} alt="" className="w-90 h-80" />
            </Link>
            <Link className="mx-3 my-3">
              <img src={project2} alt="" className="w-80 h-80" />
            </Link>
            <Link className="mx-3 my-3">
              <img src={project1} alt="" className="w-100 h-80" />
            </Link> 
            <Link className="mx-3 my-3">
              <img src={project3} alt="" className="w-90 h-80" />
            </Link>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
