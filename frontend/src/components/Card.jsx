// PaperRollCardGsap.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Card({ image, title , className }) {
  const cardRef = useRef(null);
  const infoRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const info = infoRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' }, 0)
      .to(info, { y: 0, duration: 0.3, ease: 'power2.out' }, 0);

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('mouseleave', handleLeave);

    return () => {
      card.removeEventListener('mouseenter', handleEnter);
      card.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-xs transform transition-transform duration-300 hover:cursor-pointer border-1 border-gray-200 ${className}`}
    >
      {/* Image */}
      <div className="overflow-hidden h-56 ">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Text Info */}
      <div className="p-4 mt-[1.5vw]">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{title}</h3>
        {/* <p className="text-lg font-bold text-red-600 mt-1">₹ {price}</p> */}
      </div>

      {/* Slide-up Info */}
      {/* <div
        ref={infoRef}
        className="absolute bottom-0 left-0 right-0 bg-red-600 p-4 text-sm text-white translate-y-full "
      >
        <p> High Sensitivity<br /> BPA-Free<br /> Clear Print Quality</p>
      </div> */}
    </div>
  );
}
