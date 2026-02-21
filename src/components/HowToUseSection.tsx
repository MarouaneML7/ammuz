import howToUse from "@/assets/how-to-use.jpg";

const steps = [
  {
    num: "1",
    title: "الخطوة الأولى",
    desc: "ضعي كمية مناسبة من زيت أموز على فروة رأسك (ركزي على أماكن الفراغات).",
  },
  {
    num: "2",
    title: "الخطوة الثانية",
    desc: "قومي بعمل مساج خفيف بأطراف أصابعك لمدة 5 دقائق لتحفيز الدورة الدموية.",
  },
  {
    num: "3",
    title: "الخطوة الثالثة",
    desc: "اتركيه على شعرك لمدة ساعتين على الأقل قبل الاستحمام (يمكن تركه ليلة كاملة لنتائج أفضل).",
  },
];

const HowToUseSection = () => {
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-4xl">
          طريقة استعمال سهلة لنتائج مضمونة
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row-reverse">
          {/* Image */}
          <div className="w-full md:w-2/5">
            <img
              src={howToUse}
              alt="طريقة استعمال زيت أموز"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Steps */}
          <div className="w-full space-y-6 md:w-3/5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-4 rounded-xl bg-card p-6 shadow-sm"
              >
                <div className="gradient-gold flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold text-primary">
                  {step.num}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-accent bg-secondary p-4 text-center">
              <p className="font-bold text-primary">
                📌 التكرار: استعمليه 2 إلى 3 مرات في الأسبوع.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
