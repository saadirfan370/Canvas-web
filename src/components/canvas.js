import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import frames00007 from "../assets/frames00007.png";
import frames00010 from "../assets/frames00010.png";
import frames00013 from "../assets/frames00013.png";
import frames00016 from "../assets/frames00016.png";
import frames00019 from "../assets/frames00019.png";
import frames00022 from "../assets/frames00022.png";
import frames00025 from "../assets/frames00025.png";
import frames00028 from "../assets/frames00028.png";
import frames00031 from "../assets/frames00031.png";
import frames00034 from "../assets/frames00034.png";
import frames00037 from "../assets/frames00037.png";
import frames00040 from "../assets/frames00040.png";
import frames00043 from "../assets/frames00043.png";
import frames00046 from "../assets/frames00046.png";
import frames00049 from "../assets/frames00049.png";
import frames00052 from "../assets/frames00052.png";
import frames00055 from "../assets/frames00055.png";
import frames00058 from "../assets/frames00058.png";
import frames00061 from "../assets/frames00061.png";
import frames00064 from "../assets/frames00064.png";
import frames00067 from "../assets/frames00067.png";
import frames00070 from "../assets/frames00070.png";
import frames00073 from "../assets/frames00073.png";
import frames00076 from "../assets/frames00076.png";
import frames00079 from "../assets/frames00079.png";
import frames00082 from "../assets/frames00082.png";
import frames00085 from "../assets/frames00085.png";
import frames00088 from "../assets/frames00088.png";
import frames00091 from "../assets/frames00091.png";
import frames00094 from "../assets/frames00094.png";
import frames00097 from "../assets/frames00097.png";
import frames00100 from "../assets/frames00100.png";
import frames00103 from "../assets/frames00103.png";
import frames00106 from "../assets/frames00106.png";
import frames00109 from "../assets/frames00109.png";
import frames00112 from "../assets/frames00112.png";
import frames00115 from "../assets/frames00115.png";
import frames00118 from "../assets/frames00118.png";
import frames00121 from "../assets/frames00121.png";
import frames00124 from "../assets/frames00124.png";
import frames00127 from "../assets/frames00127.png";
import frames00130 from "../assets/frames00130.png";
import frames00133 from "../assets/frames00133.png";
import frames00136 from "../assets/frames00136.png";
import frames00139 from "../assets/frames00139.png";
import frames00142 from "../assets/frames00142.png";
import frames00145 from "../assets/frames00145.png";
import frames00148 from "../assets/frames00148.png";
import frames00151 from "../assets/frames00151.png";
import frames00154 from "../assets/frames00154.png";
import frames00157 from "../assets/frames00157.png";
import frames00160 from "../assets/frames00160.png";
import frames00163 from "../assets/frames00163.png";
import frames00166 from "../assets/frames00166.png";
import frames00169 from "../assets/frames00169.png";
import frames00172 from "../assets/frames00172.png";
import frames00175 from "../assets/frames00175.png";
import frames00178 from "../assets/frames00178.png";
import frames00181 from "../assets/frames00181.png";
import frames00184 from "../assets/frames00184.png";
import frames00187 from "../assets/frames00187.png";
import frames00190 from "../assets/frames00190.png";
import frames00193 from "../assets/frames00193.png";
import frames00196 from "../assets/frames00196.png";
import frames00199 from "../assets/frames00199.png";

const Canvas12 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
    function files(index) {
      var data = [
        frames00007,
        frames00010,
        frames00013,
        frames00016,
        frames00019,
        frames00022,
        frames00025,
        frames00028,
        frames00031,
        frames00034,
        frames00037,
        frames00040,
        frames00043,
        frames00046,
        frames00049,
        frames00052,
        frames00055,
        frames00058,
        frames00061,
        frames00064,
        frames00067,
        frames00070,
        frames00073,
        frames00076,
        frames00079,
        frames00082,
        frames00085,
        frames00088,
        frames00091,
        frames00094,
        frames00097,
        frames00100,
        frames00103,
        frames00106,
        frames00109,
        frames00112,
        frames00115,
        frames00118,
        frames00121,
        frames00124,
        frames00127,
        frames00130,
        frames00133,
        frames00136,
        frames00139,
        frames00142,
        frames00145,
        frames00148,
        frames00151,
        frames00154,
        frames00157,
        frames00160,
        frames00163,
        frames00166,
        frames00169,
        frames00172,
        frames00175,
        frames00178,
        frames00181,
        frames00184,
        frames00187,
        frames00190,
        frames00193,
        frames00196,
        frames00199,
      ];
      return data[index];
    }

    const frameCount = 67;
    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
          scrub: .5,
          trigger: `#page3`,
          start: `top top`,
          end: `250% top`,
          scroller: `#main`,
        },
        onUpdate: render,
      });
      
      images[1].onload = render;
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }

    ScrollTrigger.create({
      trigger: "#page3",
      pin: true,
      scroller: "#main",
      start: "top top",
      end: "250% top",
    });
  },[]);

  return <canvas ref={canvasRef} />;
};

export default Canvas12;
