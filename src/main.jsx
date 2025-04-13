import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useTranslation } from "react-i18next";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import {Helmet} from "react-helmet";

// Create a custom SEO component for meta tags
const SEO = () => {
    const { t } = useTranslation();

    return (
        <Helmet>
            <title>{t("seo.title")}</title>
            <meta name="description" content={t("seo.description")} />
            <meta name="keywords" content={t("seo.keywords")} />
            <meta name="author" content={t("seo.author")} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* Open Graph Meta */}
            <meta property="og:title" content={t("seo.ogTitle")} />
            <meta property="og:description" content={t("seo.ogDescription")} />
            <meta property="og:image" content="https://example.com/og-image.jpg" />
            <meta property="og:url" content="https://example.com" />
            <meta property="og:type" content="website" />
        </Helmet>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SEO />
        <App />
    </StrictMode>
);