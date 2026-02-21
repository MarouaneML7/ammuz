import healthyHair from "@/assets/healthy-hair-result.jpg";

const benefits = [
  {
    icon: "✅",
    title: "وقف التساقط",
    desc: "تقليل ملحوظ في كمية الشعر المتساقط في المشط وعند الاستحمام.",
  },
  {
    icon: "✅",
    title: "كثافة وحجم",
    desc: 'ملء الفراغات تدريجياً وظهور "الخلفة" الجديدة.',
  },
  {
    icon: "✅",
    title: "لمعان وصحة",
    desc: "شعر حيوي، رطب، وغير متقصف.",
  },
  {
    icon: "✅",
    title: "تركيبة آمنة 100%",
    desc: "خالي من المواد الكيميائية، البارابين، أو أي مواد مضرة. طبيعي ومصنوع في المغرب.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-primary md:text-4xl">
          نتائج حقيقية تلاحظينها بنفسك
        </h2>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Image */}
          <div className="w-full md:w-2/5">
            <img
              src={healthyHair}
              alt="نتائج شعر صحي مع أموز"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Benefits grid */}
          <div className="grid w-full gap-6 md:w-3/5 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl bg-purple-light p-6"
              >
                <div className="mb-2 text-2xl">{benefit.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
