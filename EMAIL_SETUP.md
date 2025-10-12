# E-mail Setup Instructies voor Feedback Formulier

## ✅ Optie 1: Formspree (Aanbevolen - Eenvoudigst)

**🎉 VOORDELEN:**
- Geen ingewikkelde setup nodig
- Werkt direct zonder e-mail configuratie  
- Gratis tot 50 submissions per maand
- Geen API keys of templates nodig
- Automatische spam filtering

**📋 SETUP STAPPEN:**

1. **Account aanmaken:**
   - Ga naar https://formspree.io/
   - Klik "Get Started" 
   - Maak gratis account aan met je e-mail
   - Verificeer je account

2. **Nieuw formulier maken:**
   - Klik "New Form" in je dashboard
   - Form Name: `Password Checker Feedback`
   - Email: `kiran.chaud-ry@student.ehb.be` (waar je feedback wilt ontvangen)
   - Klik "Create Form"

3. **Form ID ophalen:**
   - Je krijgt een URL zoals: `https://formspree.io/f/xyzabc123`
   - Onthoud het deel `xyzabc123` (dit is je Form ID)

4. **Code bijwerken:**
   In `feedback.html`, vervang:
   ```javascript
   // Zoek deze regel:
   const response = await fetch('https://formspree.io/f/mjkapgag', {
   
   // En vervang 'mjkapgag' door jouw Form ID:
   const response = await fetch('https://formspree.io/f/JOUW_FORM_ID', {
   ```

**🚀 KLAAR!** Je feedback formulier verstuurt nu automatisch e-mails zonder e-mail programma!

## Optie 2: EmailJS (Meer configuratie nodig)

1. **Account aanmaken:**
   - Ga naar https://www.emailjs.com/
   - Maak een gratis account aan  
   - Configureer e-mail service en template (complexer)

2. **Voor developers die meer controle willen:**
   - EmailJS biedt meer customization opties
   - Vereist API keys en template configuratie
   - 200 gratis e-mails per maand

## Optie 3: Mailto Fallback (Altijd beschikbaar)

De huidige code heeft al een fallback die het standaard e-mail programma opent als de automatische verzending niet werkt.

## 🧪 Test Procedure

1. **Ga naar je feedback formulier** (`feedback.html`)
2. **Vul alle velden in** met testgegevens
3. **Klik "Verzenden"**
4. **Verwacht resultaat:**
   - ✅ "Feedback succesvol verzonden!" verschijnt
   - 📧 E-mail arriveert bij `kiran.chaud-ry@student.ehb.be`
   - ⏱️ Binnen 1-2 minuten

## ⚠️ Belangrijk

- **Formspree gratis limiet:** 50 submissions per maand
- **Eerste submission:** Formspree stuurt verificatie e-mail
- **Spam filtering:** Automatisch ingebouwd bij Formspree
- **Backup systeem:** Mailto fallback als Formspree niet werkt

## 📊 Huidige Status

- ✅ **Formspree ID actief:** `mjkapgag` 
- ✅ **E-mail ontvanger:** `kiran.chaud-ry@student.ehb.be`
- ✅ **Fallback systeem:** Beschikbaar
- ✅ **Gebruiker feedback:** Direct verzenden zonder e-mail programma

## 🔧 Troubleshooting

**Als feedback niet aankomt:**
1. Check spam folder 
2. Controleer Formspree dashboard op submissions
3. Verifieer dat Form ID correct is (`mjkapgag`)
4. Test met andere e-mail adres

**Formspree Dashboard:** https://formspree.io/forms (login vereist)
