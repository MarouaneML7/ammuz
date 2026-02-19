import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    name: "سناء",
    city: "الدار البيضاء",
    text: 'صراحة كنت مترددة، ولكن من بعد شهر ديال الاستعمال، التساقط نقص بزاف والخلفة بدات كتبان فمقدمة الراس. ريحتو زوينة وما كيزيتش الشعر بزاف. شكراً أموز!',
  },
  {
    name: "مريم",
    city: "الرباط",
    text: "أحسن زيت جربت لحد الآن. شعري كان ناشف ومهرس بالسيشوار، دابا ولا رطب وفي لمعة صحية. كنصح بيه أي وحدة كتعاني من التساقط.",
  },
  {
    name: "فاطمة الزهراء",
    city: "مراكش",
    text: "بعد الولادة شعري طاح بزاف، جربت بزاف ديال المنتجات وما نفعوش. أموز فرق معايا من أول أسبوعين. كنحس بالفرق وكنشوف الخلفة الجديدة.",
  },
  {
    name: "نجاة",
    city: "فاس",
    text: "زيت خفيف ما كيثقلش الشعر، ريحتو طبيعية وزوينة. الأهم أن التساقط نقص وشعري بدا كيرجع كثيف. منتج مغربي ونفتخر بيه!",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  // Go to the next testimonial (loops back to 0 if at the end)
  const handleNext = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Go to the previous testimonial (loops to the end if at 0)
  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-4xl">
          مغربيات جربن أموز وهذه كانت آراؤهن
        </h2>

        {/* Added padding to prevent arrows from overlapping the card */}
        <div className="relative mx-auto max-w-3xl px-12 md:px-20">
          
          {/* Right Arrow (Previous in Arabic RTL layout) */}
          <button
            onClick={handlePrev}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-md transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent md:h-12 md:w-12"
            aria-label="السابق"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Active testimonial Card */}
          <div className="mb-6 rounded-2xl bg-purple-light p-6 text-center shadow-sm md:p-10">
            <div className="mb-4 text-accent">⭐⭐⭐⭐⭐</div>
            <p className="mb-6 text-lg leading-loose text-foreground md:text-xl">
              "{testimonials[active].text}"
            </p>
            <p className="font-bold text-primary">
              - ({testimonials[active].name}، {testimonials[active].city})
            </p>
          </div>

          {/* Left Arrow (Next in Arabic RTL layout) */}
          <button
            onClick={handleNext}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-md transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent md:h-12 md:w-12"
            aria-label="التالي"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === active
                    ? "gradient-gold w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`شهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;