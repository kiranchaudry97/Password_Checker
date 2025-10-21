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

  ## 🚀 Installatie en Setup

### Vereisten:
- Moderne webbrowser (Chrome, Firefox, Safari, Edge)
- Internetverbinding voor externe libraries

### Lokaal uitvoeren:
1. Download of clone de repository
2. Open `Password_checker.html` in je webbrowser
3. Geen extra installatie vereist - werkt direct

### Live demo:
Open `Password_checker.html` rechtstreeks vanuit de bestandsverkenner of gebruik een lokale server.

## 📸 Screenshots en Demonstratie

### Hoofdinterface
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/password_checker_sceenshot.png)


*[ Password Checker hoofdscherm met wachtwoord invoer en real-time feedback]*


### Real-time Wachtwoord Analyse
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/password_checker_sceenshot.png)
*[ Sterktebalk en checklist tijdens het typen van een wachtwoord]*

### Educatieve FAQ Sectie
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/Password_checker_screenshot1.png)

![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/informatie_screenshot1.png)
*[ Inklapbare FAQ sectie met 9 onderwerpen over wachtwoordveiligheid]*

### Statistieken Dashboard
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/statieken_informatie_screenshot.png)

![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/Statisch_onderbouwing_screenshot.png)
*[ Overzicht van Nederlandse cybersecurity statistieken]*

### Bronnen refrentie
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/Bronnen_refrentie_screenshot.png)
*[bronnen refrentie met links ]*


### Feedback Formulier
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/3b13008816ec552168c19f2eb83ce873b1709153/screenshots/feeback_formulier.png)
*[ Anoniem feedback systeem met 1-5 schaal beoordeling]*

### Responsive Design
![image alt](https://github.com/kiranchaudry97/Password_Checker/blob/29c8697e78db5f95f1e0b488a490a7085d761223/screenshots/responsive.png)
*[ Mobile weergave van de password checker tool]*






### Screenshots en Demonstratie Materiaal:
- **Live applicatie screenshots** van eigen Password Checker prototype
- **Real-time feedback voorbeelden** tijdens wachtwoord invoer
- **Responsive design showcase** op verschillende apparaten
- **Feedback formulier demo** met anonieme gebruikersinteractie

*Alle visuele materialen zijn zelf te produceren op basis van de gedocumenteerde onderzoeksdata en werkende prototype.*


### Technische Implementatie:
- Dropbox. *zxcvbn: Low-Budget Password Strength Estimation.* https://github.com/dropbox/zxcvbn
- Formspree. *Form API Documentation.* https://formspree.io/

---

**Contact:** kiran.chaud-ry@student.ehb.be  
**Project Status:** Project Future Portofolio - Password Checker  
