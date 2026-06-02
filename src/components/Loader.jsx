import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const loaderStyles = `
  @import url("https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Manrope:wght@200..800&display=swap");

  :root {
    --light: #fff;
    --dark: #000;
  }

  /* Tüm uygulamanın üstünde (hero z-20, nav z-[200], cursor z-[9999] üzerinde) */
  .loader-stack {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2147483000;
    pointer-events: auto;
    isolation: isolate;
  }

  .loader-root * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .loader-root img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .loader-root a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--light);
    font-family: "Agdasima", sans-serif;
    font-size: 7.5rem;
    font-weight: 600;
    line-height: 0.9;
    display: block;
  }

  .loader-preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100svh;
    background-color: var(--dark);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    will-change: clip-path;
    overflow: hidden;
    z-index: 1;
  }

  .loader-progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background-color: var(--light);
    transform: scaleX(0);
    transform-origin: left;
    will-change: transform;
  }

  .loader-preloader-images {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25rem;
    height: 25rem;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    will-change: clip-path;
    overflow: hidden;
  }

  .loader-preloader-images .loader-img {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    will-change: clip-path;
    overflow: hidden;
  }

  .loader-preloader-images .loader-img img {
    position: relative;
    width: 100%;
    height: 100%;
    transform: scale(2);
    will-change: transform;
  }

  .loader-preloader-header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(60svh);
    transform-origin: top;
    will-change: transform;
    z-index: 3;
  }

  .loader-preloader-header a .char,
  .loader-preloader-copy p .line,
  .loader-header-row h1 .line {
    position: relative;
    display: inline-block;
    transform: translateY(0);
    will-change: transform;
  }

  @media (max-width: 1000px) {
    .loader-preloader-images {
      top: 35%;
      width: 10rem;
      height: 10rem;
    }

    .loader-preloader-header {
      transform: translateY(50svh);
    }

    .loader-preloader-header a {
      font-size: 4rem;
    }
  }
`;

const defaultImages = [
  "/Me/1.jpeg",
  "/Me/2.jpeg",
  "/Me/3.jpeg",
  "/Me/4.jpeg",
];

/**
 * Loader component
 *
 * Props:
 *   title   {string}   - The name displayed in the animated header (default: "Nasib K")
 *   images  {string[]} - Array of 4 image URLs for the preloader slideshow
 *   onDone  {Function} - Callback fired when the animation fully completes
 */
export default function Loader({ title = "Nasib K", images = defaultImages, onDone }) {
  const headerRef = useRef(null);
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const styleInjected = useRef(false);

  useEffect(() => {
    // Inject styles once
    if (!styleInjected.current) {
      const styleEl = document.createElement("style");
      styleEl.textContent = loaderStyles;
      document.head.appendChild(styleEl);
      styleInjected.current = true;
    }

    // Dynamically load GSAP + plugins from CDN, then run animation
    const scripts = [
      "https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js",
      "https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/SplitText.min.js",
      "https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/CustomEase.min.js",
    ];

    let loaded = 0;

    const runAnimation = () => {
      const { gsap, CustomEase, SplitText } = window;
      gsap.registerPlugin(CustomEase, SplitText);

      CustomEase.create("hop", "0.9, 0, 0.1, 1");

      const createSplit = (el, type, className) =>
        SplitText.create(el, {
          type,
          [type + "Class"]: className,
          mask: type,
        });

      const headerLink = headerRef.current?.querySelector("a");
      if (!headerLink) return;

      const splitPreloaderHeader = createSplit(headerLink, "chars", "char");

      const chars = splitPreloaderHeader.chars;
      const initialChar = chars[0];
      const lastChar = chars[chars.length - 1];

      chars.forEach((char, index) => {
        gsap.set(char, { yPercent: index % 2 === 0 ? -100 : 100 });
      });

      const preloaderImages = gsap.utils.toArray(".loader-preloader-images .loader-img");
      const preloaderImagesInner = gsap.utils.toArray(".loader-preloader-images .loader-img img");

      const tl = gsap.timeline({
        delay: 0.25,
        onComplete: () => onDone && onDone(),
      });

      tl.to(".loader-progress-bar", {
        scaleX: 1,
        duration: 4,
        ease: "power3.inOut",
      })
        .set(".loader-progress-bar", { transformOrigin: "right" })
        .to(".loader-progress-bar", {
          scaleX: 0,
          duration: 1,
          ease: "power3.in",
        });

      preloaderImages.forEach((img, index) => {
        tl.to(
          img,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "hop",
            delay: index * 0.75,
          },
          "-=5"
        );
      });

      preloaderImagesInner.forEach((imgInner, index) => {
        tl.to(
          imgInner,
          {
            scale: 1,
            duration: 1.5,
            ease: "hop",
            delay: index * 0.75,
          },
          "-=5.25"
        );
      });

      tl.to(
        chars,
        {
          yPercent: 0,
          duration: 1,
          ease: "hop",
          stagger: 0.025,
        },
        "-=5"
      );

      tl.to(
        ".loader-preloader-images",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "hop",
        },
        "-=1.5"
      );

      tl.to(
        chars,
        {
          yPercent: (index) => {
            if (index === 0 || index === chars.length - 1) return 0;
            return index % 2 === 0 ? 100 : -100;
          },
          duration: 1,
          ease: "hop",
          stagger: 0.025,
          delay: 0.5,
          onStart: () => {
            const initialCharMask = initialChar.parentElement;
            const lastCharMask = lastChar.parentElement;

            if (initialCharMask?.classList.contains("char-mask"))
              initialCharMask.style.overflow = "visible";
            if (lastCharMask?.classList.contains("char-mask"))
              lastCharMask.style.overflow = "visible";

            const viewportWidth = window.innerWidth;
            const centerX = viewportWidth / 2;
            const initialCharRect = initialChar.getBoundingClientRect();
            const lastCharRect = lastChar.getBoundingClientRect();

            gsap.to([initialChar, lastChar], {
              duration: 1,
              ease: "hop",
              delay: 0.5,
              x: (i) => {
                if (i === 0) {
                  return centerX - initialCharRect.left - initialCharRect.width;
                } else {
                  return centerX - lastCharRect.left;
                }
              },
              onComplete: () => {
                gsap.set(".loader-preloader-header", { mixBlendMode: "difference" });
                gsap.to(".loader-preloader-header", {
                  y: "2rem",
                  scale: 0.35,
                  duration: 1.75,
                  ease: "hop",
                });
              },
            });
          },
        },
        "-=2.5"
      );

      tl.to(
        ".loader-preloader",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.75,
          ease: "hop",
        },
        "-=0.5"
      );

      tl.set(".loader-stack", {
        pointerEvents: "none",
        visibility: "hidden",
      });
    };

    const loadScript = (src, cb) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        cb();
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.onload = cb;
      document.head.appendChild(s);
    };

    const onScriptLoad = () => {
      loaded += 1;
      if (loaded === scripts.length) runAnimation();
    };

    scripts.forEach((src) => loadScript(src, onScriptLoad));
  }, []);

  return createPortal(
    <div className="loader-stack loader-root" data-app-loader="true">
      <div className="loader-preloader loader-root" ref={preloaderRef}>
        <div className="loader-progress-bar" ref={progressBarRef} />

        <div className="loader-preloader-images" ref={imagesContainerRef}>
          {(images.length ? images : defaultImages).slice(0, 4).map((src, i) => (
            <div className="loader-img" key={i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="loader-preloader-header loader-root" ref={headerRef}>
        <a href="#" onClick={(e) => e.preventDefault()}>
          {title}
        </a>
      </div>
    </div>,
    document.body
  );
}