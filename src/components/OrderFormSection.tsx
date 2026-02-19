import { useState } from "react";
import heroProduct from "@/assets/hero-product.jpg";

const OrderFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 🔴 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE:
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8kQUxCd1ZG11aeLUz3HX7GA4wOpgE_1JeazhWkOGtS7pI1swNGEhx4bUILVdNI3E/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // We use text/plain to avoid CORS preflight errors with Google Apps Script
        headers: {
          "Content-Type": "text/plain;charset=utf-8", 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("عذراً، حدث خطأ أثناء إرسال الطلب. المرجو المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="order" className="gradient-purple py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-primary-foreground md:text-4xl">
          استثمري في صحة شعرك اليوم
        </h2>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row-reverse">
          {/* Product + Price */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2">
            <img
              src={heroProduct}
              alt="زيت أموز"
              className="mb-6 h-64 w-auto drop-shadow-2xl"
            />
            <p className="mb-2 text-lg text-primary-foreground/60 line-through">
              كان ب 299 درهم
            </p>
            <p className="mb-4 text-4xl font-extrabold text-gradient-gold">
              الآن ب 199 درهم فقط
            </p>
            <p className="text-lg text-primary-foreground/80">
              🚚 توصيل مجاني لباب الدار – الدفع عند الاستلام
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2">
            {submitted ? (
              <div className="rounded-2xl bg-card p-8 text-center shadow-lg">
                <div className="mb-4 text-5xl">🎉</div>
                <h3 className="mb-2 text-2xl font-bold text-primary">
                  تم تأكيد طلبك بنجاح!
                </h3>
                <p className="text-muted-foreground">
                  سنتواصل معك قريباً لتأكيد التوصيل.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-card p-8 shadow-lg"
              >
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-bold text-foreground">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="أدخلي اسمك الكامل"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:ring-2 focus:ring-accent"
                    disabled={isLoading}
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-sm font-bold text-foreground">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="06XXXXXXXX"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:ring-2 focus:ring-accent"
                    dir="ltr"
                    disabled={isLoading}
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2 block text-sm font-bold text-foreground">
                    المدينة
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="مثال: الدار البيضاء"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-all focus:ring-2 focus:ring-accent"
                    disabled={isLoading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="gradient-gold shadow-gold w-full rounded-lg py-4 text-lg font-bold text-primary transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isLoading ? "جاري إرسال الطلب..." : "اضغطي هنا لتأكيد الطلب الآن ✨"}
                </button>

                <p className="mt-4 text-center text-sm text-muted-foreground">
                  🔒 معلوماتك آمنة ولن نشاركها مع أي طرف آخر
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;