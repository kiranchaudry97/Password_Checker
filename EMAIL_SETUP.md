# E-mail Setup Instructies voor Feedback Formulier
### zie commit bericht 
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

