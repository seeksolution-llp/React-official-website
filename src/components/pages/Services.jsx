import React from "react";

const Services = () => {
  return (
    <div className=" mt-28  container">
      <div className=" h-40  bg-black aboutbg w-[80%]  ">
        <h1 className="text-white text-6xl justify-center items-center flex pt-16 font-semibold  ">
          {" "}
          Services
        </h1>
      </div>

      {/* cart  start here */}
       <div className=" my-8">

       <div className=" max-w-[1320px] mx-auto grid lg:grid-cols-3 md:grid-cols-2  px-[10px]   ">

        <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl hover:shadow-slate-600 mx-5 my-4    ">
          <a href="#">
            <img
              class="rounded-t-lg w-full px-4  "
              src="https://hhngroup.in/webimages/services/website-development-HHN-Services.gif"
              alt=""
            />
          </a>
          <div className=" flex flex-col justify-center items-center ">
            <span className=" text-2xl  font-mono cursor-pointer text-blue-500 text-center ">
            
              Web Application Development
            </span>
            <p className=" text-center px-4">
             <span className=" font-semibold"> We develop</span> Corporate Website, E- Commerce, News Portals, Job
              Portals, Educational Portal, Online ERP & CRM Software, Landing
              Pages, Lead Management Software (LMS), Domain Registration, Web
              Hosting, Virtual Private Servers (VPS), SSL Certificates, Mobile &
              HTML5 Website, Customize Applications
            </p>
          </div>
        </div>

        <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow mx-5 my-4 hover:shadow-2xl hover:shadow-slate-600   ">
          <a href="#">
            <img
              class="rounded-t-lg w-full px-4  "
              src="https://hhngroup.in/webimages/services/Mobile-Application-Development-Software-Company-Lucknow.gif"
              alt=""
            />
          </a>
          <div className=" flex flex-col justify-center items-center ">
            <span className=" text-2xl  font-mono cursor-pointer text-blue-500 text-center ">
            
            Mobile Application Development
            </span>
            <p className=" text-center ">
            <span className=" font-semibold">We create</span> Informational Applications, Corporate Mobile Applications, Ecommerce Apps, Educational Learning Apps, News Apps, Lead Filter Applications, Google Play Store Apps, Android Apps, IOS & Java Applications, Mobile friendly Apps, Gaming Application, Monetization for Apps
            </p>
          </div>
        </div>

        <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow mx-5 my-4 hover:shadow-2xl hover:shadow-slate-600   ">
          <a href="#">
            <img
              class="rounded-t-lg w-full px-4  "
              src="https://hhngroup.in/webimages/services/Design-Presentations-@HHN-Services-Lucknow-Software-Company-Lucknow.gif"
              alt=""
            />
          </a>
          <div className=" flex flex-col justify-center items-center ">
            <span className=" text-2xl  font-mono cursor-pointer text-blue-500 text-center ">
            
              Desingn & Presentations
            </span>
            <p className=" text-center px-4">
            <span className=" font-semibold">We design</span> Business Logos, Business Letter heads, Company Brochure, Promotional Banners, Social Post Banners, Corporate PPT, Informational PPT, Website Templates, Mobile Templates, Product Design, Corporate 360 degree Walk Through, Road Maps, Product models, Corporate Videos, Video Editing, Public relations (PR) Videos
            </p>
          </div>
        </div>


        <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow mx-5 hover:shadow-2xl hover:shadow-slate-600   ">
          <a href="w-full  ">
            <img
              class="rounded-t-lg w-full   "
              src="https://hhngroup.in/webimages/services/Technical-Training-Learn-PHP-Development-HHN-Services.gif"
              alt=""
            />
          </a>
          <div className=" flex flex-col justify-center items-center ">
            <span className=" text-2xl  font-mono cursor-pointer text-blue-500 text-center ">
            
              Technical Training
            </span>
            <p className=" text-center px-4">
           <span className=" font-semibold"> We provide</span> HTML, CSS, jQuery, PHP, MySQL, Wordpress, Project Development, Android Development Training, Summer Training, Job Oriented Training, Skills Development, Sales & Strategy Development, Entrepreneurship & Business Development, Finance & HR Operations, Leadership & Productivity Training.
            </p>
          </div>
        </div>

        <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow mx-5 hover:shadow-2xl hover:shadow-slate-600   ">
          <a href="#">
            <img
              class="rounded-t-lg w-full   "
              src="https://hhngroup.in/webimages/services/Branding-Advertisement-@HHN-Services.gif"
              alt=""
            />
          </a>
          <div className=" flex flex-col justify-center items-center ">
            <span className=" text-2xl  font-mono cursor-pointer text-blue-500 ">
            
              Branding & Advertisement
            </span>
            <p className=" text-center px-4">
           <span  className=" font-semibold"> We promote</span> Event Management, Cinema Malls & Multiplexes Advertising, Hoardings, Cab Branding, Road Side Activities, Radio & Print Media, TV/Channel Advertisement, Bulk SMS, Bulk Email, Missed Call Service, Toll Free Number, IVR Service, Printed Calendar, Printed Mugs, Visiting Cards & Brochure etc.
            </p>
          </div>
        </div>


        <div className=" w-fit bg-white border border-gray-200 rounded-lg shadow mx-5 hover:shadow-2xl hover:shadow-slate-600  ">
          <a href="#">
            <img
              class="rounded-t-lg w-full px-4  "
              src="https://hhngroup.in/webimages/services/new-digital-marketing-@HHN-SERVICES-LUCKNOW.gif"
              alt=""
            />
          </a>
          <div className=" flex flex-col justify-center items-center ">
            <span className=" text-2xl  font-mono cursor-pointer text-blue-500  ">
            
              Digital Marketing
            </span>
            <p className=" text-center px-4">
            <span className=" font-semibold ">We offer</span> Search Engine Optimization (SEO), Social Media Optimization (SMO), Social Media Marketing (SMM), Link Building, Affiliate Marketing, Mobile Marketing, Website Audit & Reporting, PPC / Cost Per Click (CPC), Cost per Impression (CPM), Cost per Leads (CPL), Cost per Install (CPI), Cost per Sales (CPS)
            </p>
          </div>
        </div>


        {/* card end here  */}
      </div>
       </div>
    

      <div></div>
    </div>
  );
};

export default Services;
