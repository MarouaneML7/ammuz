import { useState, useEffect } from "react";

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // We tell the code to look for the section with the ID "order"
    const orderSection = document.getElementById("order");
    
    if (!orderSection) return;

    // We set up a "Watcher" (IntersectionObserver)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the order section is on the screen (isIntersecting), hide the sticky bar.
          // Otherwise, show it.
          setIsVisible(!entry.isIntersecting);
        });
      },
      {
        root: null,
        // 0.1 means the button will start hiding when 10% of the form section is visible on screen
        threshold: 0.1, 
      }
    );

    observer.observe(orderSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // 👇 We added dynamic Tailwind classes here to control the fade in/out animation 👇
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
        اشتري الآن 🛒
      </a>
    </div>
  );
};

export default StickyBar;