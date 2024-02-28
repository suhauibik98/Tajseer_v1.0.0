import React,{useState} from "react";
import Draggable from "react-draggable";
import { animated, useSpring } from "react-spring";
import assist from "../images/Asset2p.png";

const ReadMore = () => {
  const [show, setShow] = useState(false);

  const props = useSpring({
    from: { opacity:0, y: 100 },
    to: { opacity: 1, y: 0  },
     reset: show,
  });

  const handelClick = () => {
    setShow((p) => !p);
  };
  return (
    <>
      <div className=" w-[10%] absolute top-[30%] right-[2%]">
        <Draggable>
          <div className="buttonDraggable">
            {show && (
              <animated.div style={props}>
                <div className="divimg">
                  <img src={assist} alt="" />
                </div>
              </animated.div>
            )}
            <button onClick={handelClick}>Read more !</button>
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default ReadMore;
