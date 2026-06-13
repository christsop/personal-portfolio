import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { registerStatistics } from "../../utils/utils.js";
import "./JsonBeautifier.css";

const defaultJson = `{
  "name": "Chris Tsopelas",
  "role": "Frontend Developer",
  "skills": ["React", "JavaScript", "TypeScript"],
  "location": "Zurich, Switzerland"
}`;

const JsonBeautifier = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState(defaultJson);
  const [formattedJson, setFormattedJson] = useState(JSON.stringify(JSON.parse(defaultJson), null, 2));
  const [error, setError] = useState("");

  const stats = useMemo(() => {
    try {
      const parsed = JSON.parse(formattedJson || input);
      const pretty = JSON.stringify(parsed, null, 2);
      return {
        characters: pretty.length,
        lines: pretty.split("\n").length,
      };
    } catch {
      return {
        characters: input.length,
        lines: input ? input.split("\n").length : 0,
      };
    }
  }, [formattedJson, input]);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setFormattedJson(pretty);
      setError("");
      registerStatistics("json-beautifier-format");
    } catch (formatError) {
      setFormattedJson("");
      setError(formatError.message);
      registerStatistics("json-beautifier-error");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setFormattedJson(minified);
      setError("");
      registerStatistics("json-beautifier-minify");
    } catch (formatError) {
      setFormattedJson("");
      setError(formatError.message);
      registerStatistics("json-beautifier-error");
    }
  };

  const copyOutput = async () => {
    if (!formattedJson) {
      return;
    }

    await navigator.clipboard.writeText(formattedJson);
    registerStatistics("json-beautifier-copy");
  };

  const clearAll = () => {
    setInput("");
    setFormattedJson("");
    setError("");
    registerStatistics("json-beautifier-clear");
  };

  return (
    <>
      <Helmet>
        <title>{t("jsonBeautifier.seo.title")}</title>
        <meta name="description" content={t("jsonBeautifier.seo.description")} />
        <meta name="keywords" content={t("jsonBeautifier.seo.keywords")} />
        <meta name="author" content={t("jsonBeautifier.seo.author")} />
      </Helmet>

      <section className="json-page">
        <div className="json-page-container">
          <a href="/" className="json-back-link">{t("jsonBeautifier.backHome")}</a>

          <div className="json-page-header">
            <span className="json-page-badge">{t("jsonBeautifier.badge")}</span>
            <h1 className="json-page-title">{t("jsonBeautifier.title")}</h1>
            <p className="json-page-description">{t("jsonBeautifier.description")}</p>
          </div>

          <div className="json-toolbar">
            <button type="button" className="json-toolbar-button" onClick={formatJson}>
              {t("jsonBeautifier.actions.format")}
            </button>
            <button type="button" className="json-toolbar-button secondary" onClick={minifyJson}>
              {t("jsonBeautifier.actions.minify")}
            </button>
            <button type="button" className="json-toolbar-button secondary" onClick={copyOutput} disabled={!formattedJson}>
              {t("jsonBeautifier.actions.copy")}
            </button>
            <button type="button" className="json-toolbar-button ghost" onClick={clearAll}>
              {t("jsonBeautifier.actions.clear")}
            </button>
          </div>

          <div className="json-stats-grid">
            <div className="json-stat-card">
              <span className="json-stat-label">{t("jsonBeautifier.stats.characters")}</span>
              <strong className="json-stat-value">{stats.characters}</strong>
            </div>
            <div className="json-stat-card">
              <span className="json-stat-label">{t("jsonBeautifier.stats.lines")}</span>
              <strong className="json-stat-value">{stats.lines}</strong>
            </div>
          </div>

          {error && <div className="json-error-banner">{t("jsonBeautifier.errorPrefix")}: {error}</div>}

          <div className="json-editor-grid">
            <div className="json-editor-card">
              <label className="json-editor-label" htmlFor="json-input">{t("jsonBeautifier.inputLabel")}</label>
              <textarea
                id="json-input"
                className="json-textarea"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={t("jsonBeautifier.inputPlaceholder")}
                spellCheck="false"
              />
            </div>

            <div className="json-editor-card">
              <label className="json-editor-label" htmlFor="json-output">{t("jsonBeautifier.outputLabel")}</label>
              <textarea
                id="json-output"
                className="json-textarea json-output"
                value={formattedJson}
                readOnly
                placeholder={t("jsonBeautifier.outputPlaceholder")}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JsonBeautifier;
