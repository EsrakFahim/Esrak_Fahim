"use client";

import React, { useEffect, useState } from "react";

const MobileWarning = () => {
      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
            const checkMobile = () => {
                  // Check if the screen width is less than or equal to 768px
                  if (window.innerWidth <= 768) {
                        setIsMobile(true);
                  }
            };

            checkMobile(); // Run the check on initial load
            window.addEventListener("resize", checkMobile); // Add listener to handle window resizing

            return () => {
                  window.removeEventListener("resize", checkMobile); // Cleanup the listener
            };
      }, []);

      const message = `Please switch to a desktop or tablet for the full experience. If you'd like to continue anyway, click 'Continue'.`;


      return (
            isMobile && (
                  <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg text-center">
                              <h2 className="text-lg font-semibold mb-4">
                                    Sorry, this experience is best viewed on a
                                    larger screen!
                              </h2>
                              <p className="text-gray-700">
                                    {message}
                              </p>
                              <div>
                                    <button
                                          className="bg-primary text-white px-4 py-2 rounded-lg mt-4"
                                          onClick={() => setIsMobile(false)}
                                    >
                                          Continue
                                    </button>
                              </div>
                        </div>
                  </div>
            )
      );
};

export default MobileWarning;
