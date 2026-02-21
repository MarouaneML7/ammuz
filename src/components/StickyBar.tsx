const StickyBar = () => {
  return (
    // 👇 Removed "md:hidden" so it shows on all devices
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur-md">
      {/* 👇 Added a container to keep the button centered and reasonably sized on large screens */}
      <div className="container mx-auto flex justify-center">
        <a
          href="#order-form" 
          className="gradient-gold shadow-gold block w-full max-w-md rounded-full py-3 text-center text-lg font-bold text-primary transition-all hover:scale-[1.02]"
        >
          اشتري الآن 🛒
        </a>
      </div>
    </div>
  );
};

export default StickyBar;