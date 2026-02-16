import { useState } from "react";

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

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-4xl">
          مغربيات جربن أموز وهذه كانت آراؤهن
        </h2>

        <div className="mx-auto max-w-2xl">
          {/* Active testimonial */}
          <div className="mb-6 rounded-2xl bg-purple-light p-8 shadow-sm">
            <div className="mb-4 text-accent">⭐⭐⭐⭐⭐</div>
            <p className="mb-6 text-lg leading-loose text-foreground">
              "{testimonials[active].text}"
            </p>
            <p className="font-bold text-primary">
              - ({testimonials[active].name}، {testimonials[active].city})
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === active
                    ? "gradient-gold w-8"
                    : "bg-border"
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
