import { ShoppingCart } from "lucide-react";
// 💡 Reminder: When you add your logo, uncomment the line below and change the path if needed!
// import logo from "@/assets/logo.png"; 

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
    // 👇 Magic happens here: bg-[#4a2058] applies your exact purple color! 👇
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#4a2058] shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        
        {/* 👇 Brand Logo Area 👇 */}
        {/* When you upload your logo, replace this <a> tag with your <img /> tag as we discussed earlier */}
        <a href="#" className="text-2xl font-extrabold md:text-3xl">
          <span className="text-gradient-gold">أموز</span>
        </a>

        {/* 👇 CTA Button 👇 */}
        <a
          href="#order-form"
          onClick={scrollToForm} 
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