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
  return (
    // 👇 1. Add pt-16 md:pt-20 to this main div! 👇
    <div className="min-h-screen w-full bg-background pt-16 md:pt-20"> 
      
      {/* 👇 2. Put the Header right here, exactly above the Hero Section! 👇 */}
      <Header />
      
      <HeroSection />
      
      {/* ... the rest of your sections stay exactly the same ... */}
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
