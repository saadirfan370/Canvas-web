import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar.js";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Canvas12 from "./canvas.js";

const Home = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current,
      smooth: true,
    });

    gsap.registerPlugin(ScrollTrigger);

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(mainRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: mainRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
      locoScroll.destroy();
    };
  }, []);

  let arrr = useRef(null);
  const [clutter, setClutter] = useState("");

  useEffect(() => {
    let arr = arrr.current.innerText.split(" ");
    let newClutter = arr.map((dets) => `<span>${dets}</span>`).join(" ");
    setClutter(newClutter);
  }, []);
  useEffect(() => {
    if (clutter) {
      arrr.current.innerHTML = clutter;
    }
  }, [clutter]);
  useEffect(() => {
    const target = "#page2 h1 span";

    if (target) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(target, {
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "bottom top",
          scroller: "#main",
          scrub: 0.5,
        },
        stagger: 0.2,
        color: "#fff",
      });
    }
  });

  return (
    <div id="main" ref={mainRef}>
      <div data-scroll data-scroll-speed="-5" id="page1">
        <Navbar />
        <div className="bottom-page1">
          <h1>
            Experience Real <br /> Estate Agility
          </h1>
          <div className="bottom_page1_inner">
            <h4>
              Create a digital twin of your existing building <br /> and release
              the potential of Web3.
            </h4>
            <button>LEARN MORE</button>
          </div>
        </div>
        <video
          src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div id="page2">
        <h2>CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT)</h2>
        <h1 ref={arrr}>
          The Digital Twin Token is a unique digital asset backed by property
          data. Magma combines your building’s components and systems essential
          information into a DTT.
        </h1>
      </div>
      <div id="page3">
        <Canvas12 />
      </div>
    </div>
  );
};

export default Home;
