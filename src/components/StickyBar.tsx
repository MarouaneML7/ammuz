const StickyBar = () => {
  return (
    // 👇 Removed the background/border and moved it to float on the bottom-left
    <div className="fixed bottom-6 left-6 z-50 md:bottom-8 md:left-8">
      <a
        href="#order-form" 
        className="gradient-gold shadow-gold flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-primary transition-all hover:scale-110 hover:shadow-2xl"
      >
        اشتري الآن 🛒
      </a>
    </div>
  );
};

export default StickyBar;