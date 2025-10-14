# Password Checker - Bewustwording & Wachtwoordbeveiliging

## 📋 Inleiding en Onderzoeksvraag

**Hoofdonderzoeksvraag:**
Hoe kan software gebruikers helpen hun accounts beter te beveiligen door hen bewust te maken van risico’s en door middel van een interactief prototype dat inzicht geeft in veilige wachtwoordpraktijken en accountbeveiliging

### Korte omschrijving en doel
Sterke wachtwoorden zijn cruciaal tegen hackers en datalekken. Dit onderzoek bekijkt breder dan wachtwoordsterkte alleen ook: bewustwording rond datalekken, wachtwoordhergebruik en veilig aanmeldgedrag. Doel is te begrijpen welke interface-elementen en feedback (tekst/visueel/interactief) positief gebruikersgedrag beïnvloeden.

Als eindresultaat is een prototype (HTML/CSS/JS) ontwikkeld dat gebruikers directe feedback geeft over wachtwoordsterkte en veilig gedrag: kleurcodes (rood–oranje–groen), korte tips, icoontjes en meldingen. Zo combineert het prototype technische controle met educatie , en informaties over hoe ze beter hun wachtwoord kunnen beveiligen.

## 🎯 Problemen en Doelstellingen

### Problemen die we oplossen:
- **Zwakke, voorspelbare of hergebruikte wachtwoorden**
- **Onvoldoende bewustzijn** over risico's (phishing, datalekken)
- **Gebrek aan duidelijke feedback** in interfaces
- **Onveilig opslaan/beheren** van wachtwoorden

### Doelstellingen:
1. **In kaart brengen** oorzaken van onveilig wachtwoordgedrag
2. **Onderzoeken** hoe softwarefeedback (kleur, tekst, tips) gedrag verbetert
3. **Ontwikkelen** van een password-checker prototype met educatieve feedback
4. **(Indien haalbaar)** gebruikerstest om bewustwording/gedragseffect te peilen

### Bijvragen (subdoelen):
- Welke fouten maken gebruikers het vaakst?
- Hoe worden wachtwoorden gelekt/gestolen?
- Hoe herkennen gebruikers zwakke wachtwoorden?
- Welke stappen, tools (wachtwoordmanager/2FA) helpen het meest?
- Welke bewustwordingsinterventies werken (zelfeffectiviteit/risicoperceptie)?

## 🔬 Plan van Aanpak

### Methode:
- **Literatuurstudie:** beveiligingsrichtlijnen, rapporten, voorlichtingswebsites
- **Synthetiserende analyse:** bundelen van best practices + statistieken  
- **Prototype-ontwikkeling (HTML/CSS/JS):** feedback over lengte/complexiteit, blacklist-checks, tips, feedback formulier
- **(Optioneel) UX-verkenning:** proefpersonen voor kwalitatieve feedback (begrijpelijkheid meldingen, motivatie-effect van kleuren/teksten) gemaakt via Figma.

### Data die verzameld wordt:
- **Richtlijnen:** Microsoft, Kaspersky, DTC, Consumentenbond
- **Statistieken:** KCPEG, Kaspersky mkb, Bitwarden/NordPass/ESET lijsten, Security.nl
- **UX-bevindingen:** uit microtests (indien uitgevoerd)

### Doelgroep:
- **Brede eindgebruikers** (niet-technisch)
- **Studenten/docenten** die hun beveiliging willen verbeteren

## 📊 Onderzoeksresultaten per Deelvraag

### 5.1 Hoe kunnen gebruikers hun wachtwoord beter beveiligen?
- **Lang** (≥12–16 tekens), **complex** (Aa1!), **uniek** per account
- **Manager en 2FA** sterk aanbevolen; nooit opslaan in losse notities/bestanden
- **Bronnen:** Microsoft, Kaspersky, LastPass, Consumentenbond, Keeper Security

### 5.2 Hoe en waarom worden wachtwoorden gelekt/gestolen?
- **Mix van menselijke fouten**, phishing, onveilige opslag, kwetsbaarheden, en hergebruik
- **Hoofdoorzaken:** Sociale engineering, onveilige databases, hergebruik tussen services

### 5.3 Welke fouten maken gebruikers het vaakst?
- **Topfouten:** "123456", "password", te kort, persoonlijke info, patronen ("111111", "qwerty1")
- **Variaties:** "Welkom01" en onveilige opslag in browsers/notities

### 5.4 Hoe herkennen gebruikers zwakke wachtwoorden?
- **Kenmerken:** Kort, voorspelbaar, hergebruikt
- **Tools:** Apparaten en wachtwoordmanagers geven waarschuwingen; online checks bestaan

### 5.5 Welke stappen maken wachtwoorden sterker en unieker?
- **Wachtwoordzinnen**, manager, regelmatig vernieuwen (na lek)
- **Geen persoonlijke data**, MFA implementeren

### 5.6 Hoe helpt tweestapsverificatie (2FA)?
- **Tweede factor** (sms/app/biometrie/security key) blokkeert inlog met enkel wachtwoord
- **Effectiviteit:** Blokkeert 99,9% van geautomatiseerde aanvallen

### 5.7 Hoe sla/beheer je wachtwoorden veilig (manager)?
- **Sterk hoofdwachtwoord** (≥16 tekens), MFA op de manager
- **AES-256 encryptie**, niet in browsernotities bewaren

### 5.8 Hoe voorkom je wachtwoordhergebruik?
- **Manager/generator**, alerts bij hergebruik
- **Geen variaties** van hetzelfde wachtwoord gebruiken

### 5.9 Welke rol speelt bewustwording?
- **Verhoogt risicoperceptie** en zelfeffectiviteit → sterkere wachtwoorden
- **Meer gebruik** van manager/2FA door educatie

## 📈 Statistische Onderbouwing

- **84%** van NL-gebruikers vertoont onveilig wachtwoordgedrag (KCPEG, 2024)
- **26%** van Europese mkb'ers had incidenten door zwakke/ongepatchte wachtwoorden (Kaspersky, 2024)
- **Top-zwakke wachtwoorden** blijven "123456", "password", "qwerty" (ESET/Bright/NordPass)
- **2FA voorkomt** het merendeel van geautomatiseerde aanvallen; adoptie blijft laag (Google/Microsoft)

## 🛠️ Technische Implementatie

### Projectstructuur:
```
Password_Checker/
├── Password_checker.html      # Hoofdapplicatie met password checker tool
├── feedback.html             # Anoniem feedback formulier
├── README.md                # Uitgebreide projectdocumentatie
├── EMAIL_SETUP.md           # Formspree configuratie instructies
├── css/
│   └── style.css           # Styling met #FFC700 thema en responsive design
└── js/
    └── script.js           # JavaScript functionaliteit en zxcvbn integratie
```

### Prototype Features:
- **Real-time analyse:** zxcvbn password strength library met Nederlandse feedback
- **Copy functionaliteit:** Clipboard API met browser fallback support
- **Educatieve content:** 9 FAQ secties gebaseerd op onderzoeksresultaten
- **Statistieken:** Data-gedreven inzichten met Nederlandse cijfers
- **Responsive design:** #FFC700 thema met toegankelijke interface
- **Feedback systeem:** Anonieme gebruiker feedback via Formspree integratie

### Technologieën:
- HTML5, CSS3, Vanilla JavaScript
- zxcvbn library voor sterkte analyse
- Formspree API voor feedback verzameling
- EmailJS fallback voor email integratie

### AI-Tools en Ondersteuning:
- **Perplexity AI:** Literatuuronderzoek en bronverificatie voor academische onderbouwing
- **Scribbr AI:** Literatuuronderzoek ondersteuning en academische bronnenanalyse
- **GitHub Copilot:** Code suggesties voor JavaScript functionaliteiten en CSS grid layouts
- **ChatGPT:** Ontwikkeling van responsive container designs en gebruikersinterface optimalisatie en design idee.
- **VS Code Copilot:**  Debugging ondersteuning tijdens ontwikkeling , instructie van email setup, readme file documentatie.

## 📸 Screenshots en Demonstratie

### Hoofdinterface
*[Afbeelding wordt toegevoegd: Password Checker hoofdscherm met wachtwoord invoer en real-time feedback]*

### Real-time Wachtwoord Analyse
*[Afbeelding wordt toegevoegd: Sterktebalk en checklist tijdens het typen van een wachtwoord]*

### Educatieve FAQ Sectie
*[Afbeelding wordt toegevoegd: Inklapbare FAQ sectie met 9 onderwerpen over wachtwoordveiligheid]*

### Statistieken Dashboard
*[Afbeelding wordt toegevoegd: Overzicht van Nederlandse cybersecurity statistieken]*

### Feedback Formulier
*[Afbeelding wordt toegevoegd: Anoniem feedback systeem met 1-5 schaal beoordeling]*

### Responsive Design
*[Afbeelding wordt toegevoegd: Mobile weergave van de password checker tool]*

### Copy Functionaliteit
*[Afbeelding wordt toegevoegd: Clipboard copy button met visuele feedback]*

## ✅ Conclusies

Het onderzoek bevestigt dat **menselijk gedrag** (hergebruik, voorspelbaarheid, onveilige opslag) de grootste risicofactor is. Software kan dit gedrag positief sturen met duidelijke feedback, waarschuwingen en educatieve tips.

### Belangrijkste bevindingen:
1. **Combinatie van sterke unieke wachtwoorden**, wachtwoordmanager, 2FA, en bewustwording is het meest effectief
2. **Software feedback** (kleur, tekst, tips) kan gedrag positief beïnvloeden
3. **Real-time feedback** verhoogt bewustzijn van wachtwoordsterkte significant
4. **Nederlandse interface** met duidelijke tips verbetert gebruikersadoptie

### Impact van het prototype:
Het geplande prototype is daarom passend: het koppelt technische checks aan begrijpelijke, motiverende feedback die aanzet tot veilig gedrag.

- **Educatieve waarde:** 9 FAQ secties gebaseerd op literatuuronderzoek
- **Praktische implementatie:** Real-time wachtwoord analyse met Nederlandse feedback
- **Bewustwording:** Statistieken en bronnen voor verdere verdieping
- **Toegankelijkheid:** Responsieve interface geschikt voor brede doelgroep

### Vervolgonderzoek:
- Uitgebreide gebruikerstests voor gedragsverandering
- Langetermijn effect van educatieve interventies
- Integratie met populaire wachtwoordmanagers

## 📚 Bronvermelding

### Wachtwoordbeveiliging Fundamenten:
- Microsoft. *What is password protection?* https://www.microsoft.com/nl-be/security/business/security-101/what-is-password-protection
- Kaspersky. *How to create a strong password.* https://www.kaspersky.nl/resource-center/threats/how-to-create-a-strong-password
- Keeper Security. *Top five password security tips.* https://www.keepersecurity.com/blog/nl/2023/07/18/top-five-password-security-tips/
- LastPass. *Tips for creating strong passwords.* https://www.lastpass.com/nl/features/password-generator/tips-for-creating-strong-passwords
- Consumentenbond. *Datalekken – gevaren en wat te doen.* https://www.consumentenbond.nl/veilig-internetten/datalekken-de-gevaren-en-wat-moet-je-doen

### Datalekken en Beveiligingsrisico's:
- Keeper Security. *What are data leaks?* https://www.keepersecurity.com/blog/nl/2023/09/26/what-are-data-leaks/
- PowerDMARC. *What is a data leak?* https://powerdmarc.com/nl/what-is-a-data-leak/
- CBA Benelux. *Vijf meest voorkomende issues die een datalek veroorzaken.* https://www.cbabenelux.nl/nieuws/vijf-meest-voorkomende-issues-die-een-datalek-veroorzaken
- Security.nl. *Belgische toezichthouder: menselijke fouten belangrijkste oorzaak datalekken.* https://www.security.nl/posting/894582/

### Wachtwoordfouten en Zwakke Wachtwoorden:
- ESET. *Meest voorkomende wachtwoorden ter wereld.* https://onlineveilig.eset.com/dit-zijn-de-meest-voorkomende-wachtwoorden-ter-wereld/
- Bright. *Slechtste wachtwoorden van 2024.* https://www.bright.nl/nieuws/1238436/de-slechtste-wachtwoorden-van-2024-zijn-zo-simpel-dat-hackers-zullen-smullen.html
- Metro Nieuws. *Wachtwoorden die cyberexperts vermijden.* https://www.metronieuws.nl/lifestyle/tech/2025/02/wachtwoorden-vermijden-cyberexperts-hacken/
- VRT NWS. *Meest gebruikte wachtwoorden (2022).* https://www.vrt.be/vrtnws/nl/2022/11/18/meest-gebruikte-wachtwoorden/
- Wachtwoordmanager.com. *Zwakke wachtwoorden.* https://wachtwoordmanager.com/kennisbank/zwakke-wachtwoorden/

### Sterke Wachtwoorden en Verbetering:
- Scholieren.com. *Stappenplan voor betere wachtwoorden.* https://www.scholieren.com/blog/simpel-stappenplan-voor-betere-wachtwoorden
- Timension. *Wachtwoorden en veilig digitaal werken.* https://timension.nl/kennisbank/het-nieuwe-werken/wachtwoorden/
- Digital Trust Center. *Tips voor het bedenken van een sterk wachtwoord.* https://www.digitaltrustcenter.nl/tips-voor-het-bedenken-van-een-sterk-wachtwoord
- Apple Support. *Beveiligingsadviezen op iPhone.* https://support.apple.com/nl-be/guide/iphone/iphd5d8daf4f/ios

### Tweestapsverificatie (2FA):
- Veiliginternetten.nl. *Wat is tweestapsverificatie?* https://veiliginternetten.nl/wat-tweestapsverificatie/
- Ben.nl. *Tweestapsverificatie uitgelegd.* https://www.ben.nl/blog/tweestapsverificatie/
- Google Support. *Tweestapsverificatie instellen.* https://support.google.com/accounts/answer/185839?hl=nl

### Wachtwoordmanagers:
- Keeper Security. *How to use a password manager.* https://www.keepersecurity.com/blog/nl/2023/05/31/how-to-use-a-password-manager/
- Kaspersky. *Password Manager – protecting your data online.* https://www.kaspersky.nl/resource-center/preemptive-safety/protecting-your-data-online-password-manager
- ProjectTracks. *Veilig omgaan met wachtwoorden.* https://www.projecttracks.be/overzicht-toolbox/digitaal-bewaren/veilig-omgaan-met-wachtwoorden

### Wachtwoordhergebruik:
- Keeper Security. *How to end password reuse on the web.* https://www.keepersecurity.com/blog/nl/2022/09/19/how-to-end-password-reuse-on-the-web/
- LayerX Security. *What is password reuse?* https://layerxsecurity.com/nl/glossary/what-is-password-reuse/
- Digital Trust Center. *Zo gebruik je veilig je wachtwoorden.* https://www.digitaltrustcenter.nl/informatie-advies/zo-gebruik-je-veilig-je-wachtwoorden

### Bewustwording en Organisaties:
- KCPEG. *Veilige toegang en verantwoord delen.* https://www.kcpeg.nl/content/files/veilige-toegang-en-verantwoord-delen.pdf
- MindYourPass. *Wachtwoordveiligheid binnen organisaties.* https://mindyourpass.io/nl/artikelen/in-een-oogopslag-de-veiligheid-van-alle-wachtwoorden-binnen-jouw-organisatie-in-beeld
- IkWilMobielWerken. *Hoe veilig is wachtwoordbeleid?* https://ikwilmobielwerken.nl/security/hoe-veilig-is-wachtwoordbeleid-organisatie/

### Technische Implementatie:
- Dropbox. *zxcvbn: Low-Budget Password Strength Estimation.* https://github.com/dropbox/zxcvbn
- Formspree. *Form API Documentation.* https://formspree.io/

---

**Contact:** kiran.chaud-ry@student.ehb.be  
**Project Status:** Project Future Portofolio - Password Checker  
