
import slid1 from "../../assets/slid1.jpg"
import slid2 from "../../assets/slid2.jpg"
import slid3 from "../../assets/slid3.jpg"
import slid4 from "../../assets/slid4.jpg"

  
  import { Carousel } from 'antd';
  
  
  const contentStyle = {
    height: '600px',
    color: '#000000',
    lineHeight: '40px',
    textAlign: 'center',
    background: 'red',
  };
  const Banner = () => (
  
    <div className=" w-full  z-10 mt-28">
       <div className=" w-full relative">
       <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src={slid1} className=" h-[100%] w-full" alt=""
           />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={slid2} className="h-full w-full" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={slid3} className="h-full w-full" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={slid4} className="h-full w-full" alt="" />
        </h3>
      </div>
    </Carousel>
    </div>
    </div>
  
   
  );
  export default Banner;