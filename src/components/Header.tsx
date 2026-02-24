import { ShoppingCart } from "lucide-react";

const Header = () => {
  
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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#4a2058] shadow-md">
      {/* 👇 1. Changed to justify-center on mobile, and md:justify-between on desktop 👇 */}
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:h-20 md:justify-between">
        
        {/* 👇 Brand Logo Area 👇 */}
        <a href="#" className="flex items-center">
          <img 
            src="https://i.ibb.co/jkgDDsnZ/Ammuz-Logo.png" 
            alt="أموز لوجو" 
            className="h-10 w-auto object-contain md:h-12" 
          />
        </a>

        {/* 👇 CTA Button 👇 */}
        {/* 👇 2. Added "hidden md:flex" so it disappears on phones but shows on laptops 👇 */}
        <a
          href="#order-form"
          onClick={scrollToForm} 
          className="hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-primary transition-all hover:scale-105 hover:shadow-lg md:flex md:px-8 md:py-2.5 md:text-base gradient-gold shadow-gold"
        >
          اطلبي الآن 
          <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
        </a>
        
      </div>
    </header>
  );
};

export default Header;