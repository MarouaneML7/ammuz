import { useEffect } from "react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import AgitationSection from "@/components/AgitationSection";
import SolutionSection from "@/components/SolutionSection";
import IngredientsSection from "@/components/IngredientsSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import OrderFormSection from "@/components/OrderFormSection";
import StickyBar from "@/components/StickyBar";

const Index = () => {
  // 👇 The ViewContent Tracking Block 👇
  useEffect(() => {
    // For Meta (Facebook) Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'زيت أموز - Ammuz Hair Oil',
        content_category: 'Hair Care',
        currency: 'MAD',
        value: 149.00
      });
    }

    // For TikTok Pixel
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('ViewContent', {
        content_name: 'زيت أموز - Ammuz Hair Oil',
        currency: 'MAD',
        value: 149.00
      });
    }
  }, []); // The empty array [] ensures this only fires exactly once when the page loads!
  // 👆 End of Tracking Block 👆

  return (
    <div className="min-h-screen w-full bg-background pt-16 md:pt-20"> 
      
      <Header />
      <HeroSection />
      
      <AgitationSection />
      <SolutionSection />
      <IngredientsSection />
      <BenefitsSection />
      <HowToUseSection />
      <TestimonialsSection />
      <FAQSection />
      <OrderFormSection />
      <StickyBar />

      {/* Footer */}
      <footer className="bg-primary py-8 text-center text-primary-foreground">
        <p className="text-lg font-bold">أموز - Ammuz</p>
        <p className="mt-2 text-sm text-primary-foreground/60">
          © 2026 جميع الحقوق محفوظة | منتج طبيعي مصنوع في المغرب 🇲🇦
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;