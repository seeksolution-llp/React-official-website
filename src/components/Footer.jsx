import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-purple-900 text-white py-10  ">
    <div className="footerContent flex flex-col md:flex-row flex-wrap justify-evenly pb-6">
      {/* <!-- Company logo and description --> */}
      <div className="companyBox pl-5  my-3 md:px-2 md:mx-3">
        <div className="logoBox font-bold text-3xl pb-3">Seek Solution</div>
        <p className="max-w-xs">Seek Solution provides best software, web & mobile app development services from small
          to
          large
          scale
          businesses. Our efficient development process helps you to only focus on result instead of process
          overhead
        </p>
      </div>
      {/* <!-- Company Heading about blogs and contact us --> */}
      <div className="companyinfo pl-5  my-3 md:px-2 md:mx-3">
        <h3 className="font-bold text-xl pt-2 pb-3">Company</h3>
        <div className="my-1"><a className="font-semibold" href="#">About Us</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Blogs</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Contact Us</a></div>
      </div>
      {/* <!-- Services Box --> */}
      <div className="ServicesBox pl-5  my-3 md:px-2 md:mx-3">
        <h3 className="font-bold text-xl pt-2 pb-3">Services</h3>
        <div className="my-1"><a className="font-semibold" href="#">Web Development</a></div>
        <div className="my-1"><a className="font-semibold" href="#">UI/UX Design</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Quality Assurance</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Mobile App Development</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Digital Marketing Services</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Content Writing Services</a></div>
        <div className="my-1"><a className="font-semibold" href="#">Maintenance Services</a></div>
      </div>
      {/* <!-- Work With Us and Contact Us --> */}
      <div className="WorkWithUs pl-5  my-3 md:px-2 md:mx-3">
        <h3 className="font-bold text-xl pt-2 pb-3">Work with us</h3>
        <div className="my-1"><a className="font-semibold" href="#">Careers</a></div>
      </div>
      <div className="ContactUs pl-5  my-3 md:px-2 md:mx-3">
        <h3 className="font-bold text-xl pt-2 pb-3">Contact us</h3>
        <div className="my-1"><a className="font-semibold" href="#">+91 xxx-xxx-xxxx</a></div>
        <div className="my-1"><a className="font-semibold" href="#">support@seeksolution.in</a></div>
      </div>
    </div>
    <div class="copyrightBar md:mx-14 text-center md:text-start">
      &#169; Copyright Seek Solution. All rights reserved.
    </div>
  </footer>
  )
}

export default Footer