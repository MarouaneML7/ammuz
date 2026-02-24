import heroProduct from "@/assets/hero-product.jpg";

const HeroSection = () => {

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const form = document.getElementById("order-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => form.scrollIntoView({ behavior: "smooth" }), 400);
    }
  };
  
  return (
    <section className="relative overflow-hidden bg-background pb-16 pt-8">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative mx-auto flex flex-col items-center gap-8 px-4 md:flex-row-reverse md:gap-12">
        {/* Product Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <img
            src={heroProduct}
            alt="زيت أموز للشعر"
            className="h-auto max-h-[500px] w-auto drop-shadow-2xl shadow-sm rounded-sm" />

        </div>

        {/* Text Content */}
        <div className="w-full text-center md:w-1/2 md:text-right">
          <span className="mb-4 inline-block rounded-full bg-purple-light px-4 py-1.5 text-sm font-medium text-primary">
            🌿 تركيبة طبيعية 100%
          </span>
          <h1 className="text-3xl font-extrabold leading-tight text-primary my-[14px] md:text-4xl mb-[20px] mt-[14px]">
            استعيدي كثافة شعرك وودعي التساقط المقلق مع{" "}
            <span className="text-gradient-gold">أموز</span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            التركيبة الطبيعية المركزة التي توقف "نزيف" الشعر وتعيد الحياة
            للبصيلات المتعبة في 30 يوماً.
          </p>
          <a
            href="#order-form"
            onClick={scrollToForm}
            className="gradient-gold shadow-gold inline-block rounded-full px-8 py-4 text-lg font-bold text-primary transition-all hover:scale-105 hover:shadow-lg"
          >
            اطلبي الآن والدفع عند الاستلام
          </a>
        </div>
      </div>
    </section>);

};

export default HeroSection;