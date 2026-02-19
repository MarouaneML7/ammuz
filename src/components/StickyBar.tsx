const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border px-4 py-3 backdrop-blur-md md:hidden bg-white/0">
      <a
        href="#order"
        className="gradient-gold shadow-gold block w-full rounded-full py-3 text-center text-lg font-bold text-primary transition-all hover:scale-[1.02]">

        اشتري الآن 🛒
      </a>
    </div>);

};

export default StickyBar;