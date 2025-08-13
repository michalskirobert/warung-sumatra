import { useTranslations } from "next-intl";

type Props = { t?: ReturnType<typeof useTranslations> };

export default function Contact({ t }: Props) {
  const $t = t ?? useTranslations();

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="slide-in-left">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-heading font-bold text-stone-800 mb-6">
            {$t("contact-info-title")}
          </h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <span className="text-amber-600 text-xl mt-1">📍</span>
              <div>
                <p className="font-semibold text-stone-800 mb-1">
                  {$t("contact-address-label")}
                </p>
                <p className="text-stone-600">{$t("contact-address")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-amber-600 text-xl mt-1">📞</span>
              <div>
                <p className="font-semibold text-stone-800 mb-1">
                  {$t("contact-phone-label")}
                </p>
                <a
                  href="tel:+48123456789"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  +48 123 456 789
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-amber-600 text-xl mt-1">🕒</span>
              <div>
                <p className="font-semibold text-stone-800 mb-1">
                  {$t("contact-hours-label")}
                </p>
                <p className="text-stone-600">{$t("contact-hours")}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-6">
            <h4 className="text-lg font-semibold text-stone-800 mb-4">
              {$t("contact-social-title")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/48123456789"
                target="_blank"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all shadow-lg"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                ☎️
              </a>
              <a
                href="https://instagram.com/warungsumatra"
                target="_blank"
                className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-all shadow-lg"
                rel="noreferrer"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="https://facebook.com/warungsumatra"
                target="_blank"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all shadow-lg"
                rel="noreferrer"
                aria-label="Facebook"
              >
                📘
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-in-right">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-heading font-bold text-stone-800 mb-6">
            {$t("contact-form-title")}
          </h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-amber-800 text-sm">
              <strong>{$t("demo-label")}</strong> {$t("demo-text")}
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert($t("form-success"));
            }}
          >
            <div>
              <label className="block text-stone-800 font-semibold mb-2">
                {$t("form-name-label")}
              </label>
              <input
                type="text"
                className="w-full p-4 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                placeholder={$t("form-name-placeholder")}
                required
              />
            </div>

            <div>
              <label className="block text-stone-800 font-semibold mb-2">
                {$t("form-email-label")}
              </label>
              <input
                type="email"
                className="w-full p-4 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                placeholder={$t("form-email-placeholder")}
                required
              />
            </div>

            <div>
              <label className="block text-stone-800 font-semibold mb-2">
                {$t("form-message-label")}
              </label>
              <textarea
                rows={4}
                className="w-full p-4 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all"
                placeholder={$t("form-message-placeholder")}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              {$t("form-submit-btn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
