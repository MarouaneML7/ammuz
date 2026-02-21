const StickyBar = () => {
  return (
    // 👇 Mobile: Centered (left-1/2 -translate-x-1/2) and wide (w-[90%]). 
    // 👇 Desktop (md:): Snaps to left (md:left-8 md:translate-x-0) and hugs the text (md:w-auto).
    <div className="fixed bottom-6 left-1/2 z-50 w-[90%] max-w-[350px] -translate-x-1/2 md:bottom-8 md:left-8 md:w-auto md:translate-x-0">
      <a
        href="#order-form" 
        className="gradient-gold shadow-gold flex w-full items-center justify-center whitespace-nowrap rounded-full px-8 py-4 text-lg font-bold text-primary transition-all hover:scale-110 hover:shadow-2xl md:w-auto"
      >
        اشتري الآن 🛒
      </a>
    </div>
  );
};

export default StickyBar;