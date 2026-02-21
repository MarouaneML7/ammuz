import productIngredients from "@/assets/product-ingredients.jpg";

const SolutionSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img

              alt="زيت أموز مع المكونات الطبيعية"
              className="w-full rounded-2xl object-cover shadow-lg" src="/lovable-uploads/cf516d00-b1d5-4018-a740-5eb346aa7eb4.webp" />
              loading="lazy"

          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-4xl">
              الحل ليس في "الكيمياء"، بل في العودة إلى الطبيعة...{" "}
              <span className="text-gradient-gold">لكن بذكاء.</span>
            </h2>
            <p className="text-lg leading-loose text-muted-foreground">
              نقدم لكِ زيت <strong className="text-primary">أموز (Ammuz)</strong>
              . ليس مجرد زيت شعر عادي، بل هو "سيروم" طبيعي مكثف. لقد جمعنا أقوى
              10 زيوت طبيعية معروفة تاريخياً وعلمياً بقدرتها على إنبات الشعر، في
              تركيبة واحدة متوازنة، خفيفة، وسريعة الامتصاص.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default SolutionSection;