import { useState, useEffect } from "react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 👇 Now it ONLY watches the form wrapper, ignoring the picture
    const formBox = document.getElementById("form-wrapper");
    
    if (!formBox) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0.1, 
      }
    );

    observer.observe(formBox);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-1/2 z-50 w-[90%] max-w-[350px] -translate-x-1/2 md:bottom-8 md:left-8 md:w-auto md:translate-x-0 transition-all duration-500 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <a
        href="#order-form" 
        className="gradient-gold shadow-gold flex w-full items-center justify-center whitespace-nowrap rounded-full px-8 py-4 text-lg font-bold text-primary transition-all hover:scale-110 hover:shadow-2xl md:w-auto"
      >
        اشتري الآن
      </a>
    </div>
  );
};

export default StickyBar;