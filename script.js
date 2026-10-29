
const skillDetails = {
  python: {
    title: "Python",
    description:
      "Practising programming fundamentals, problem-solving, functions, OOP, and small projects."
  },
  web: {
    title: "HTML & CSS",
    description:
      "Building web-page structure and styling layouts with readable, responsive designs."
  },
  javascript: {
    title: "JavaScript",
    description:
      "Exploring the fundamentals needed to make web pages interactive."
  },
  sql: {
    title: "SQL",
    description:
      "Learning relational database fundamentals and how to work with structured data."
  },
  git: {
    title: "Git & GitHub",
    description:
      "Practising version control, repositories, branches, and maintaining project history."
  },
  ai: {
    title: "AI development",
    description:
      "Exploring AI APIs and agent workflows while learning how to build useful applications."
  }
};

const skillButtons = document.querySelectorAll(".skill-chip");
const skillTitle = document.querySelector("#skill-detail-title");
const skillCopy = document.querySelector("#skill-detail-copy");
const skillHint = document.querySelector(".detail-hint");

function showSkill(button) {
  const skill = skillDetails[button.dataset.skill];

  if (!skill || !skillTitle || !skillCopy) return;

  skillButtons.forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });

  skillTitle.textContent = skill.title;
  skillCopy.textContent = skill.description;

  if (skillHint) {
    skillHint.innerHTML = "CURRENT LEARNING FOCUS";
  }
}

skillButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("mouseenter", () => {
    showSkill(button);
  });

  button.addEventListener("focus", () => {
    showSkill(button);
  });

  button.addEventListener("click", () => {
    showSkill(button);
  });
});

// Copy the email address.
const copyButton = document.querySelector("#copy-email");
const copyFeedback = document.querySelector("#copy-feedback");

if (copyButton && copyFeedback) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyFeedback.textContent = "Email copied!";
    } catch {
      copyFeedback.textContent =
        "Copy unavailable here. Use the Email me link instead.";
    }
  });
}

// Keep the footer year current.
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
