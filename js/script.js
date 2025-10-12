// =======================
// Wachtwoord Checker met zxcvbn + patroonherkenning
// =======================

// Elementen
const input       = document.getElementById("password");
const toggleEye   = document.getElementById("toggleEye");
const copyButton  = document.getElementById("copyPassword");
const bar         = document.getElementById("bar");
const percentEl   = document.getElementById("percent");
const strengthEl  = document.getElementById("strength");
const scoreText   = document.getElementById("scoreText");
const statusChip  = document.getElementById("statusChip");
const lengthLabel = document.getElementById("lengthLabel");
const adviceText  = document.getElementById("adviceText");

// Checklist items
const ruleUpper   = document.getElementById("rule-upper");
const ruleLower   = document.getElementById("rule-lower");
const ruleNum     = document.getElementById("rule-num");
const ruleSym     = document.getElementById("rule-sym");
const ruleLen     = document.getElementById("rule-len");
const rulePattern = document.getElementById("rule-pattern");

// Gebruikersspecifieke context (optioneel)
const userInputs = [];

// Toggle oog
toggleEye.addEventListener("click", () => {
  const isPwd = input.type === "password";
  input.type = isPwd ? "text" : "password";
  toggleEye.textContent = isPwd ? "🙈" : "👁️";
});

// Copy wachtwoord functie
copyButton.addEventListener("click", async () => {
  const password = input.value;
  if (!password) {
    showCopyFeedback("Geen wachtwoord om te kopiëren", false);
    return;
  }
  
  try {
    await navigator.clipboard.writeText(password);
    showCopyFeedback("Wachtwoord gekopieerd!", true);
  } catch (err) {
    // Fallback voor oudere browsers
    input.select();
    document.execCommand('copy');
    showCopyFeedback("Wachtwoord gekopieerd!", true);
  }
});

// Feedback functie voor copy actie
function showCopyFeedback(message, success) {
  const originalText = copyButton.textContent;
  copyButton.textContent = success ? "✅" : "❌";
  copyButton.title = message;
  
  setTimeout(() => {
    copyButton.textContent = originalText;
    copyButton.title = "Kopieer wachtwoord";
  }, 2000);
}

// Analyse functie
input.addEventListener("input", () => {
  const pwd = input.value;
  const len = pwd.length;

  // Analyse via zxcvbn
  const res = typeof zxcvbn === "function" ? zxcvbn(pwd, userInputs) : { score: 0, feedback: { suggestions: [] } };

  // Basisregels
  const hasUpper = /[A-Z]/.test(pwd);
  const hasLower = /[a-z]/.test(pwd);
  const hasNum   = /\d/.test(pwd);
  const hasSym   = /[^A-Za-z0-9]/.test(pwd);
  const lenOk    = len >= 12;

  // Extra detecties
  const hasRepeat  = /(.)\1{2,}/.test(pwd);
  const hasName    = /(naam|familie|voornaam|achternaam)/i.test(pwd);
  const hasPattern = /(1234|abcd|qwerty|azerty|password|welcome|admin|login|test)/i.test(pwd);

  // Checklist
  setRule(ruleUpper, hasUpper);
  setRule(ruleLower, hasLower);
  setRule(ruleNum,   hasNum);
  setRule(ruleSym,   hasSym);
  setRule(ruleLen,   lenOk);
  setRule(rulePattern, !hasPattern);

  // Bereken percentage
  let pct = Math.round((res.score / 4) * 80);
  if (len >= 12 && len < 20) pct += Math.min(10, len - 12);
  if (len >= 20) pct += 20;
  pct = Math.min(100, pct);
  const score10 = Math.round(pct / 10);

  // Update UI
  bar.style.width = pct + "%";
  percentEl.textContent = pct + "%";
  lengthLabel.textContent = `Lengte: ${len} / 20 tekens aanbevolen`;
  scoreText.textContent = `(score ${score10}/10)`;

  strengthEl.classList.remove("is-weak","is-medium","is-strong");
  if (pct <= 40) {
    strengthEl.classList.add("is-weak");
    statusChip.textContent = "Zwak wachtwoord";
  } else if (pct <= 70) {
    strengthEl.classList.add("is-medium");
    statusChip.textContent = "Gemiddeld wachtwoord";
  } else {
    strengthEl.classList.add("is-strong");
    statusChip.textContent = "Sterk wachtwoord";
  }

  // Feedback
  const tips = [];
  if (!lenOk) tips.push("Maak het wachtwoord langer (min. 12; 20 is veiliger).");
  if (!hasUpper) tips.push("Voeg een hoofdletter toe.");
  if (!hasLower) tips.push("Voeg een kleine letter toe.");
  if (!hasNum)   tips.push("Voeg een cijfer toe.");
  if (!hasSym)   tips.push("Voeg een speciaal teken toe.");
  if (hasPattern) tips.push("Vermijd voorspelbare patronen zoals 1234 of qwerty.");
  if (hasRepeat)  tips.push("Vermijd herhalingen (bijv. aaa of 1111).");
  if (hasName)    tips.push("Gebruik nooit je naam of familienaam.");

  if (res.feedback && res.feedback.suggestions.length > 0)
    tips.push(...res.feedback.suggestions);

  adviceText.textContent = tips.length
    ? tips.join(" ")
    : (pct >= 80 ? "Uitstekend! Je wachtwoord is sterk." : "Bijna goed — maak het nog iets langer of diverser.");
});

// Helperfunctie checklist
function setRule(el, ok) {
  if (!el) return;
  el.classList.toggle("ok", ok);
  el.classList.toggle("bad", !ok);
}
