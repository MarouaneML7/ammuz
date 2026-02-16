const ingredients = [
  {
    oils: "زيت الخروع + زيت اليازير (إكليل الجبل)",
    benefit: "الثنائي الأقوى لتحفيز البصيلات النائمة وتسريع النمو.",
    emoji: "🌿",
  },
  {
    oils: "زيت الحبة السوداء + زيت السالمية",
    benefit: "لتقوية فروة الرأس ومحاربة الالتهابات التي تسبب التساقط.",
    emoji: "🖤",
  },
  {
    oils: "زيت الخزامى + زيت بذور الكتان",
    benefit: "لتهدئة الفروة ومنح الشعر لمعاناً صحياً.",
    emoji: "💜",
  },
  {
    oils: "زيت اللوز الحلو + زيت اللوز المر",
    benefit: "تغذية عميقة للشعرة من الداخل لترميم التلف.",
    emoji: "🌰",
  },
  {
    oils: "زيت السمسم + بذور العنب",
    benefit: "حماية الشعر من العوامل الخارجية ومنحه ملمساً حريرياً.",
    emoji: "🍇",
  },
];

const IngredientsSection = () => {
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-primary md:text-4xl">
          10 زيوت ملكية في قارورة واحدة
        </h2>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          (قوة الطبيعة المركزة)
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-purple"
            >
              <div className="mb-3 text-3xl">{item.emoji}</div>
              <h3 className="mb-2 text-lg font-bold text-primary">
                {item.oils}
              </h3>
              <p className="text-muted-foreground">{item.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
