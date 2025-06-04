import { useTranslation } from "react-i18next";

export default function NewsLetter() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary w-full p-3 rounded-lg shadow-md mx-auto text-center space-y-2">
      <h2 className="text-2xl font-bold">
        Subscribe to{" "}
        <span className="text-highlight-1">{t("dalitmurasu")}</span> for Updates
      </h2>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-md border border-gray-300 max-w-lg flex-grow"
          required
        />
        <button
          type="submit"
          className="bg-primary hover:bg-highlight-1 text-white px-4 py-2 rounded-md transition-colors duration-150 ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
