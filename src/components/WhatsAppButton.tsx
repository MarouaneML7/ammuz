import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // 👇 Change this to your real WhatsApp number (Start with 212, no plus sign)
  const phoneNumber = "212772967342"; 
  
  // The message that will be pre-filled when they open WhatsApp
  const message = encodeURIComponent("السلام عليكم، بغيت نطلب زيت أموز بـ 149 درهم. واش مزال متوفر؟");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-4 z-50 md:bottom-8 md:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#128C7E] md:h-16 md:w-16"
        aria-label="تواصل معنا عبر واتساب"
      >
        <MessageCircle className="h-8 w-8 md:h-10 md:w-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;