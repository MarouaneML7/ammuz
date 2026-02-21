import hairLossProblem from "@/assets/hair-loss-problem.jpg";

const AgitationSection = () => {
  const problems = [
    "تخافين من تمشيط شعرك أو غسله بسبب كمية الشعر المتساقط؟",
    "الفراغات بدأت تظهر وتسبب لك الإحراج وفقدان الثقة؟",
    "جربتِ الزيوت التقليدية والمنتجات الكيميائية وضيعتِ مالك ووقتك بلا فائدة؟",
    "شعرك أصبح خفيفاً، باهتاً، وفقد حيويته بسبب التوتر ونمط الحياة السريع؟",
  ];

  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row-reverse">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={hairLossProblem}
              alt="مشكلة تساقط الشعر"
              className="w-full rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-8 text-2xl font-bold text-primary md:text-4xl">
              هل تعبتِ من تجربة وصفات بدون نتيجة؟
            </h2>
            <ul className="space-y-5">
              {problems.map((problem, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg leading-relaxed text-foreground"
                >
                  <span className="mt-1 flex-shrink-0 text-xl">😔</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgitationSection;
