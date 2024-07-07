import React from 'react';
import TechBox from './TechBox';

const TechSection = () => {
      return (
            <div className='bg-neutral-50 px-4 py-12'>
                  <h2 
                  className='text-6xl font-semibold '
                  style={{
                        padding: "36px calc(clamp(2.5em, 8vw, 8em) * 1.5)",
                  }}
                  >
                        Tech I Know
                  </h2>
                  <div className=''
                  style={{
                        padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                  }}
                  >
                        <TechBox/>
                  </div>
            </div>
      );
};

export default TechSection;