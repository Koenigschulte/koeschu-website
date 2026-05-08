const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  color: "#C76B10",
  fontFamily: "var(--font-syne)",
  marginBottom: "0.75rem",
  marginTop: "2rem",
};

const bodyTextStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "18px",
  lineHeight: "1.75",
  fontFamily: "var(--font-syne)",
  margin: "0 0 1rem",
};

const subHeadingStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 700,
  color: "#ffffff",
  fontFamily: "var(--font-syne)",
  marginBottom: "0.5rem",
  marginTop: "1.5rem",
};

export default function ImpressumDatenschutzPage() {
  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "4rem 1.5rem 5rem",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "3rem", fontFamily: "var(--font-figtree)" }}>
        <span style={{ color: "#C76B10" }}>Impressum</span>
        <span style={{ color: "#7b96b5" }}> &amp; Datenschutz</span>
      </h1>

      <div>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#C76B10", fontFamily: "var(--font-syne)", marginBottom: "1rem" }}>
          Impressum
        </h2>

        <p style={bodyTextStyle}>
          <strong style={{ color: "#ffffff" }}>Alexander Königschulte</strong><br />
          AI driven consultant<br />
          Im Röhrken 27c<br />
          58456 Witten<br />
          Deutschland
        </p>
        <p style={bodyTextStyle}>
          Tel.: 0163 6003939<br />
          E-Mail: alexander@koeschu.com
        </p>
        <p style={bodyTextStyle}>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
          Alexander Königschulte (Im Röhrken 27c, 58456 Witten)
        </p>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#C76B10", fontFamily: "var(--font-syne)", marginBottom: "0.5rem" }}>
          Datenschutzerklärung
        </h2>
        <p style={{ ...bodyTextStyle, color: "#aaaaaa", fontSize: "16px", marginBottom: "2rem" }}>
          Stand: 02.09.2025
        </p>

        <h3 style={sectionHeadingStyle}>1. Datenschutz auf einen Blick</h3>
        <h4 style={subHeadingStyle}>Allgemeine Hinweise</h4>
        <p style={bodyTextStyle}>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>

        <h4 style={subHeadingStyle}>Datenerfassung auf dieser Website</h4>
        <p style={bodyTextStyle}>
          <strong style={{ color: "#ffffff" }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>
        <p style={bodyTextStyle}>
          <strong style={{ color: "#ffffff" }}>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        <p style={bodyTextStyle}>
          <strong style={{ color: "#ffffff" }}>Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <p style={bodyTextStyle}>
          <strong style={{ color: "#ffffff" }}>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>

        <h3 style={sectionHeadingStyle}>2. Hosting</h3>
        <p style={bodyTextStyle}>
          Diese Website wird auf einem deutschen Server (Hetzner) gehostet. Der Hosting-Anbieter erhebt in sogenannten Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, die Adresse der vorher besuchten Website (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung kommt, und Informationen zu Browser und Betriebssystem.
        </p>
        <p style={bodyTextStyle}>
          Das ist erforderlich, um die Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten. Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO. Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten Zugriff.
        </p>

        <h3 style={sectionHeadingStyle}>3. Allgemeine Hinweise und Pflichtinformationen</h3>
        <h4 style={subHeadingStyle}>Datenschutz</h4>
        <p style={bodyTextStyle}>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <h4 style={subHeadingStyle}>Hinweis zur verantwortlichen Stelle</h4>
        <p style={bodyTextStyle}>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
          Alexander Königschulte, Im Röhrken 27c, 58456 Witten<br />
          Telefon: 0163 6003939, E-Mail: alexander@koeschu.com
        </p>
        <h4 style={subHeadingStyle}>Speicherdauer</h4>
        <p style={bodyTextStyle}>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
        </p>

        <h3 style={sectionHeadingStyle}>4. Datenerfassung auf dieser Website</h3>
        <h4 style={subHeadingStyle}>Kontaktformular</h4>
        <p style={bodyTextStyle}>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>

        <h3 style={sectionHeadingStyle}>5. Soziale Medien</h3>
        <p style={bodyTextStyle}>
          Auf dieser Website sind Links zu sozialen Netzwerken eingebunden. Die Links führen zu meinem Profil auf LinkedIn. Beim Anklicken des Links werden Sie auf die Website des jeweiligen Netzwerks weitergeleitet. Erst dann werden Daten an den Anbieter übermittelt. Informationen zum Datenschutz bei LinkedIn finden Sie in der Datenschutzerklärung von LinkedIn.
        </p>

        <h3 style={sectionHeadingStyle}>6. Ihre Rechte</h3>
        <p style={bodyTextStyle}>
          Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten: Recht auf Auskunft, Recht auf Berichtigung oder Löschung, Recht auf Einschränkung der Verarbeitung, Recht auf Widerspruch gegen die Verarbeitung, Recht auf Datenübertragbarkeit. Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
        </p>

        <h3 style={sectionHeadingStyle}>7. Widerspruch gegen Werbe-E-Mails</h3>
        <p style={bodyTextStyle}>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
        </p>

        <h3 style={sectionHeadingStyle}>8. Cookies</h3>
        <p style={bodyTextStyle}>
          Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind. Eine Einwilligung ist hierfür nicht erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <h3 style={sectionHeadingStyle}>9. Änderungen dieser Datenschutzerklärung</h3>
        <p style={bodyTextStyle}>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 2rem 1.5rem 3rem !important; }
        }
      `}</style>
    </section>
  );
}
