export const perspective = {
      initial: {
            scale: 1,
            y: 0,
      },
      enter: {
            scale: 1,
            y: 0,
      },
      exit: {
            scale: 0.9,
            y: -150,
            opacity: 0.5,
            transition: {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
            },
      },
};

export const slide = {
      initial: {
            y: "100vh", // Start off-screen
      },
      enter: {
            y: "100vh", // Slide to the normal position (on-screen)
            transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
            },
      },
      exit: {
            y: "100vh", // Slide back off-screen when exiting
            transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
            },
      },
};

export const opacity = {
      initial: {
            opacity: 0,
      },
      enter: {
            opacity: 1,
            transition: {
                  duration: 0.5,
            },
      },
      exit: {
            opacity: 1,
      },
};
