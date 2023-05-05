import React, { useState } from "react";
import location from "../../assets/location.png";
import Call from "../../assets/call_icon.png";
// import { GoogleApi } from "google-map-react"o

const Contact = () => {

    const [title , setTitel]= useState("")

    const handleData = ()=>{
       e.preventdefault()
       console.log(e.target[1].value)
    }

  return (
    <div className=" mt-28">
      {/* fist section start  */}

      <div className=" h-40 w-full bg-black aboutbg ">
        <h1 className="text-white text-6xl justify-center items-center flex pt-16 font-semibold  ">
          {" "}
          Contact us
        </h1>
      </div>
      {/* fist section end  */}

      {/* <div className=' w-[80%] mx-auto    my-10 flex flex-wrap justify-between items-center   '  >

     <div className='flex-1     items-center justify-center text-center  '>
    
     <img src="https://reflectivedesign.in/wp-content/uploads/2023/03/email.png" alt="" className='ml-[160px] mb-4' />
     <h1 className=' text-3xl'>Email</h1>
     <h1>info@refletivedesign.in</h1>
     <h1>support@reflectivedesign.in</h1>
        
     </div>

      <div className='flex-1   text-center  '>
      <img src={location} alt="" className='w-20 ml-[160px] mb-4 ' /> 
      <h1 className=' text-3xl'>Address</h1>
      <h1>Plot No.10, Pratap Nagar, br Tedhi Pulia Ring Road, Vikas Nagar, Lucknow, Uttar Pradesh  226022</h1>

      </div>

      <div className=' flex-1   items-center justify-center text-center'>
      <img src={Call} className=' w-24 ml-[160px] mb-4 ' alt="" />
      <h1>+91-000000000</h1>
      <h1>+91-000000000</h1>

      </div>

      
       
    </div> */}

      <div className=" w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2  px-[10px] gap-5  my-8  ">

        <div className=" w-full    rounded-lg  mx-5     ">
          <div className=" flex text-center justify-center items-center my-4  ">
            <img
              class="rounded-t-lg  "
              src="https://reflectivedesign.in/wp-content/uploads/2023/03/email.png"
              alt=""
            />
          </div>
          <div className=" text-center mx-4 my-4 px-4  ">
          <h1 className=' text-3xl'>Email</h1>
     <h1>info@refletivedesign.in</h1>
     <h1>support@reflectivedesign.in</h1>
          </div>
        </div>

        <div className=" w-full  rounded-lg  mx-5     ">
          <div className=" flex text-center justify-center items-center my-4  ">
            <img
              class="rounded-t-lg w-20  "
              src={location}
              alt=""
            />
          </div>
          <div className=" text-center mx-4 my-4 px-4  ">
          <h1 className=' text-3xl'>Address</h1>
      <h1>Plot No.10, Pratap Nagar, br Tedhi Pulia Ring Road, Vikas Nagar, Lucknow, Uttar Pradesh  226022</h1>

          </div>
        </div>

        <div className=" w-full rounded-lg  mx-5     ">
          <div className=" flex text-center justify-center items-center my-4  ">
            <img
              class="rounded-t-lg  w-20 "
              src={Call}
              alt=""
            />
          </div>
          <div className=" text-center mx-4 my-4 px-4  ">
          <h1>+91-000000000</h1>
      <h1>+91-000000000</h1>
          </div>
        </div>

      </div>

      <div className=" container pt-10   ">
        <div className=" w-[80%] mx-auto grid md:grid-cols-2  my-10 gap-5   ">
          <div className=" justify-center items-center md:flex-col ">
            <h1 className=" text-6xl font-semibold ">
              {" "}
              Have Questions? <br /> Get in Touch!
            </h1>
            <p>
              Get in touch with us for all your digital marketing needs. Our
              team of experts is ready to help you reach your online goals.
            </p>
          </div>

          <div className="justify-center items-center md:flex-col aboutbg1 "></div>
        </div>
      </div>

      <div className=" w-[70%] mx-auto mt-10   ">
        <form action="" className=" shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleData} >
          <h1>
            Name <span className=" text-red-700">*</span>{" "}
          </h1>
          <input
            type="text"
            name=""
            id=""
            // value={titel}
            // onChange={(e) => setTitel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline mb-[10px] "
            placeholder="Enter your name"
          />
          <h1>
            Email <span className=" text-red-700">*</span>{" "}
          </h1>
          <input
            type="text"
            name=""
            id=""
            // value={titel}
            // onChange={(e) => setTitel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[10px] "
            placeholder="Enter the Email"
          />

          <h1>
            Phone <span className=" text-red-700">*</span>{" "}
          </h1>

          <input
            type="text"
            name=""
            id=""
            // value={titel}
            // onChange={(e) => setTitel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[10px] "
            placeholder="Enter the mobile number"
          />

          <h1>
            Servics <span className=" text-red-700">*</span>{" "}
          </h1>
          <input
            type="text"
            name=""
            id=""
            // value={titel}
            // onChange={(e) => setTitel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[10px] "
            placeholder="Enter the title"
          />
          <h1>
            Message <span className=" text-red-700">*</span>{" "}
          </h1>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Description"
            // value={area}
            // onChange={(e) => setArea(e.target.value)}
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-[10px]"
          ></textarea>

          <div className=" text-center mt-[10px] ">
            <input
              type="submit"
              value="Send Message"
              className=" bg-red-400 px-[30px] py-2 rounded-xl text-xl font-bold hover:bg-red-600 hover:text-white  cursor-pointer  "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
