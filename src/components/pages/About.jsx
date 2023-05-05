import React from "react";

const About = () => {
  return (
    <div className=" mt-28 ">
      {/* fist section start  */}

      <div className=" h-40 w-full bg-black aboutbg ">
        <h1 className="text-white text-6xl justify-center items-center flex pt-16 font-semibold  ">
          {" "}
          About
        </h1>
      </div>
      {/* fist section end  */}

       
      <div className=" w-[80%] mx-auto grid md:grid-cols-2  my-10  ">
        <div className="  justify-center items-center md:flex-col     ">
          <img
            className=" w-[80%] "
            src="https://hhngroup.in/webimages/services/Design-Presentations-@HHN-Services-Lucknow-Software-Company-Lucknow.gif"
            alt=""
          />
        </div>

        <div className="  md:flex-col justify-center items-center text-center mt-[10%]  ">
          <h1 className=" text-4xl font-mono text-gray-500 ">
            We,re a trusted growth partner for #startup entrepreneurs.
          </h1>

          <button className=" border border-black px-10  mt-10 rounded-lg  font-mono text-xl hover:bg-red-600 hover:text-white hover:border-none ">
            {" "}
            Our Work Portfolio 
          </button>
        </div>

      </div>

      <div className=" w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2  px-[10px] gap-5  my-8  ">

        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow mx-5     ">
          <div className=" flex text-center justify-center items-center my-4  ">
          <img
              class="rounded-t-lg  "
              src="https://hhngroup.in/webimages/services/Sales%20Effectiveness.png"
              alt=""
            />
          </div>
           <div className=" text-center mx-4 my-4 px-4  ">
           <h1 className=" text-2xl" >Sales Effectiveness</h1>
           <p>HHN software are designed to boost business sales or leads through online marketing and global reach</p>
           </div>
        </div>

        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow mx-5     ">
          <div className=" flex text-center justify-center items-center my-4  ">
          <img
              class="rounded-t-lg  "
              src="https://hhngroup.in/webimages/services/seo-web-code-icon-e1588169674461.png"
              alt=""
            />
          </div>
           <div className=" text-center mx-4 my-4 px-4  ">
           <h1 className=" text-2xl" >Sales Effectiveness</h1>
           <p>HHN software are designed to boost business sales or leads through online marketing and global reach</p>
           </div>
        </div>

        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow mx-5      ">
          <div className=" flex text-center justify-center items-center my-4  ">
          <img
              class="rounded-t-lg  "
              src="https://hhngroup.in/webimages/services/Our%20Agile%20Approach.png"
              alt=""
            />
          </div>
           <div className=" text-center mx-4 my-4 px-4  ">
           <h1 className=" text-2xl" >Sales Effectiveness</h1>
           <p>HHN software are designed to boost business sales or leads through online marketing and global reach</p>
           </div>
        </div>

        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow mx-5 mb-4     ">
          <div className=" flex text-center justify-center items-center my-4  ">
          <img
              class="rounded-t-lg  "
              src="https://hhngroup.in/webimages/services/Security%20&%20Backups.png"
              alt=""
            />
          </div>
           <div className=" text-center mx-4 my-4 px-4  ">
           <h1 className=" text-2xl" >Sales Effectiveness</h1>
           <p>HHN software are designed to boost business sales or leads through online marketing and global reach</p>
           </div>
        </div>

        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow mx-5     ">
          <div className=" flex text-center justify-center items-center my-4  ">
          <img
              class="rounded-t-lg  "
              src="https://hhngroup.in/webimages/services/Flexibility%20&%20Scalability.png"
              alt=""
            />
          </div>
           <div className=" text-center mx-4 my-4 px-4  ">
           <h1 className=" text-2xl" >Sales Effectiveness</h1>
           <p>HHN software are designed to boost business sales or leads through online marketing and global reach</p>
           </div>
        </div>

        <div className=" w-full bg-white border border-gray-200 rounded-lg shadow mx-5    ">
          <div className=" flex text-center justify-center items-center my-4  ">
          <img
              class="rounded-t-lg  "
              src="https://hhngroup.in/webimages/services/Customer%20Support.png"
              alt=""
            />
          </div>
           <div className=" text-center mx-4 my-4 px-4  ">
           <h1 className=" text-2xl" >Sales Effectiveness</h1>
           <p>HHN software are designed to boost business sales or leads through online marketing and global reach</p>
           </div>
        </div>

      </div>


    </div>
  );
};

export default About;
