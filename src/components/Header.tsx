import { ShoppingCart } from "lucide-react";

const Header = () => {
  
  // 👇 The new Smart Scroll Function 👇
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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        
        <a href="#" className="text-2xl font-extrabold text-primary md:text-3xl">
          <span className="text-gradient-gold">أموز</span>
        </a>

        <a
          href="#order-form"
          onClick={scrollToForm} // 👇 We attached it here! 👇
          className="gradient-gold shadow-gold flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-primary transition-all hover:scale-105 hover:shadow-lg md:px-8 md:py-2.5 md:text-base"
        >
          اطلبي الآن 
          <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
        </a>
        
      </div>
    </header>
  );
};

export default Header;