import React from "react";
import { Link } from "react-router-dom";
import { useInView , animated } from "react-spring";
const NavMotion = ({ Name,isActive ,onClick,delay}) => {
  const [ref,sprin] = useInView(() => ({
    // from: { opacity: 0, y:-50 },
    // to: { opacity: 1, y:0,delay: 100*delay }
    from: { opacity: 0, transform: "translateY(-100%)",transition: "0.1s linear" },
    to: { opacity: 1, transform: "translateY(0%)",delay: 100*delay },
    

    
  }));

  // console.log(rest);
  return (
    <>
    <animated.div ref={ref} style={sprin}>
      <Link
      className={`nav-link ${isActive ? 'active' : ''}`}
        to="#"
        onClick={onClick}
      >
        {Name}
      </Link>
      </animated.div>
    </>
  );
};

export default NavMotion;
