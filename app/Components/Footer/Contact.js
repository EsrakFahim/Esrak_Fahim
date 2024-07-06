import TextFlip from "@/app/AnimComponents/TextFlip";
import React from "react";


const Contact = () => {
      return (
            <div
                  className="relative min-h-[700px] bg-green-300"
                  style={{
                        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
                  }}
            >
                  <div className="fixed bottom-0 min-h-[700px] w-full">
                        <div className=" grid place-content-center gap-2  px-8 py-24 text-black">
                              {[
                                    {
                                          linkName:"Twitter",
                                          href:'https://x.com/Esrak2018'
                                    },
                                    {
                                          linkName:"Facebook",
                                          href:'https://www.facebook.com/esrak.fahim.52/'
                                    },
                                    {
                                          linkName:"Instagram",
                                          href:'https://www.instagram.com/iamesrak'
                                    },
                                    {
                                          linkName:"LinkedIn",
                                          href:'https://www.linkedin.com/in/esrakfahim18'
                                    },
                                    {
                                          linkName:"Github",
                                          href:'https://github.com/EsrakFahim'
                                    },
                              ]?.map((item, index) => {
                                    return <TextFlip key={index} text={item?.linkName} href={item?.href} />;
                              })}
                        </div>
                  </div>
            </div>
      );
};

export default Contact;