import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full mt-auto text-center py-4 text-sm text-gray-600 dark:text-gray-300">
      <p>
        &copy;{new Date().getFullYear()} {t("dalitmurasu")}. All rights
        reserved.
      </p>
    </footer>
  );
}
