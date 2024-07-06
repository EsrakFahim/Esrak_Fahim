import React from 'react';

const Card = ({item}) => {
      return (
            <div
            className='group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 '
            >
                  <div
                  style={
                        {
                              backgroundImage: `url(${item.src})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                        }
                  }
                  className='absolute inset-0 z-0 transition-transform duration-300 transform group-hover:scale-110'
                  />
                  <div className='absolute inset-0 z-10 grid place-content-center' >
                        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg' >
                              {
                                    item?.title
                              }
                        </p>
                  </div>
            </div>
      );
};

export default Card;