import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "متى تظهر النتائج؟",
    a: "تختلف النتائج من شخص لآخر، ولكن معظم المستخدمات يلاحظن توقف التساقط وتغير ملمس الشعر خلال الأسابيع الأربعة الأولى. الكثافة تحتاج وقتاً أطول قليلاً (حوالي 3 أشهر).",
  },
  {
    q: "هل الزيت مناسب لجميع أنواع الشعر؟",
    a: "نعم، تركيبته الطبيعية المتوازنة تجعله مناسباً للشعر الجاف، الدهني، والعادي.",
  },
  {
    q: "كيف يمكنني الدفع؟",
    a: "نحن نوفر خدمة الدفع عند الاستلام. لن تدفعي أي شيء حتى يصلك المنتج إلى باب منزلك وتتأكدي منه.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-4xl">
          أسئلة شائعة
        </h2>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-xl border border-border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-right text-lg font-bold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-loose text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
