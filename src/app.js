import React from "react";
import { useTranslation, Trans } from "react-i18next";

export default function App() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	const index = 11;

	return (
		<div className="App">
			<div className="App-header">
				<h2>{t("Welcome to React")}</h2>
				<button onClick={() => changeLanguage("de")}>de</button>
				<button onClick={() => changeLanguage("en")}>en</button>
			</div>
			<div className="App-intro">
				<Trans>
					To get started, edit <code>src/App.js</code> and save to reload.
				</Trans>
				<Trans i18nKey="welcome">trans</Trans>
			</div>
			<div style={{ marginTop: 40 }}>
				Learn more:&nbsp;
				<a href="https://react.i18next.com">https://react.i18next.js</a>
			</div>
		</div>
	);
}
