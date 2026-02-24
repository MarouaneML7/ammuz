import { useState, useEffect } from "react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        form.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <div 
      // 👇 Here is the magic: "left-4 right-24" anchors it on mobile, leaving space for WhatsApp 👇
      className={`fixed bottom-6 left-4 right-24 z-50 md:bottom-8 md:left-8 md:right-auto md:w-auto transition-all duration-500 ease-in-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <a
        href="#order-form" 
        onClick={scrollToForm} 
        // 👇 Adjusted padding and text size (px-4 text-base) so it fits nicely in the new narrower space on mobile 👇
        className="gradient-gold shadow-gold flex w-full items-center justify-center whitespace-nowrap rounded-full px-4 py-4 text-base font-bold text-primary transition-all hover:scale-105 hover:shadow-2xl sm:px-8 sm:text-lg md:w-auto"
      >
        اشتري الآن
      </a>
    </div>
  );
};

export default StickyBar;