import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = async (main) => {


    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        
        {
        fpsLimit: 250,
        
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#FDC377",'#FD7C2B','#3D244C','000000']
          },
          links: {
            color:  "#151D3B",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 0.8,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: ["circle",'triangle'],
          },
          size: {
            value: { min: 2, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesComponent