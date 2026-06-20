const products = {
  gentle: {
    title: "The Gentle Movement System for Women",
    image: "./assets/gentle-system.png",
    url: "https://claireharts.gumroad.com/l/mkcph",
    otherUrl: "https://claireharts.gumroad.com/l/strongknees",
    otherLabel: "My knees are the bigger issue",
    cta: "Get my 7-day reset",
    risk: "The pattern to interrupt: stiffness becomes normal, so you move less, then moving feels even harder.",
    copy:
      "You do not need a punishing workout. You need a small system that gets repeated before your body votes against it. Claire’s 7-day foundation gives your hips, shoulders, posture, balance, and legs a clear path back into regular movement.",
    bullets: [
      "A 7-day beginner sequence you can follow without planning",
      "Three repeatable routines for the weeks after",
      "Chair-and-wall friendly movements, no jumping",
      "Built for the body you have now, not the one you had at 30"
    ]
  },
  knees: {
    title: "Bulletproof Knees",
    image: "./assets/bulletproof-knees.png",
    url: "https://claireharts.gumroad.com/l/strongknees",
    otherUrl: "https://claireharts.gumroad.com/l/mkcph",
    otherLabel: "Show me the full-body reset instead",
    cta: "Start with my knees",
    risk: "The pattern to interrupt: you trust your knees less, so you avoid the exact movements that keep them supported.",
    copy:
      "Your answers put the knees in the driver’s seat. That is worth handling first. The goal is not to chase pain or act brave. It is to rebuild confidence with short, focused movements your knees can tolerate at home.",
    bullets: [
      "Focused stretches and strength moves for knee support",
      "Designed for women 40+ who want a safe starting point",
      "Useful when stairs, kneeling, or walks are already on your mind",
      "Short enough to repeat before you talk yourself out of it"
    ]
  },
  both: {
    title: "The Gentle Movement System + Knee Support",
    image: "./assets/gentle-system.png",
    url: "https://claireharts.gumroad.com/l/mkcph",
    otherUrl: "https://claireharts.gumroad.com/l/strongknees",
    otherLabel: "Add Bulletproof Knees",
    cta: "Begin with the full-body system",
    risk: "The pattern to interrupt: stiffness and knee caution team up until your world gets smaller without asking permission.",
    copy:
      "You are not dealing with one tiny problem. Your answers show a loop: stiffness makes you cautious, caution makes you move less, and the knees start to feel louder. Begin with the full-body reset, then add the knee program if stairs still feel like the boss of you.",
    bullets: [
      "Best if your whole body feels stiff and your knees do not feel fully reliable",
      "The 7-day foundation restores the movement habit first",
      "Knee work becomes the support layer, not another confusing plan",
      "A simple order: move daily, then specialize where needed"
    ]
  }
};

const questions = [
  {
    section: "About You",
    title: "How old are you?",
    subtitle: "This changes how gently Claire starts the plan.",
    name: "age",
    answers: [
      { label: "40-49", value: "gentle", art: "age40" },
      { label: "50-59", value: "both", art: "age50" },
      { label: "60-69", value: "both", art: "age60" },
      { label: "70+", value: "both", art: "age70" }
    ]
  },
  {
    section: "Body Signal",
    title: "What did you notice first?",
    subtitle: "The first thing you notice is usually the thing that has been adapting the longest.",
    name: "signal",
    answers: [
      { label: "I need a moment after standing up", value: "gentle", art: "chair" },
      { label: "My knees are always in the conversation", value: "knees", art: "knees" },
      { label: "I feel stiff before the day begins", value: "gentle", art: "stiff" },
      { label: "Balance feels less automatic", value: "both", art: "balance" }
    ]
  },
  {
    section: "Avoidance",
    title: "What have you started avoiding?",
    subtitle: "Avoidance is quiet. That is why it works so well.",
    name: "avoid",
    answers: [
      { label: "Stairs, squats, or kneeling", value: "knees", art: "stairs" },
      { label: "Exercise videos that move too fast", value: "gentle", art: "video" },
      { label: "Longer walks, even when I want to go", value: "both", art: "walk" },
      { label: "Getting on the floor", value: "gentle", art: "floor" }
    ]
  },
  {
    section: "Pain Point",
    title: "Where does your body complain the loudest?",
    subtitle: "Pick the answer you would say out loud to a friend.",
    name: "area",
    answers: [
      { label: "Knees", value: "knees", art: "knees" },
      { label: "Hips or lower back", value: "gentle", art: "hips" },
      { label: "Shoulders and posture", value: "gentle", art: "posture" },
      { label: "A bit everywhere", value: "both", art: "whole" }
    ]
  },
  {
    section: "Real Life",
    title: "Which moment feels most annoying?",
    subtitle: "Not dramatic. Just irritating enough to keep happening.",
    name: "moment",
    answers: [
      { label: "Going downstairs carefully", value: "knees", art: "downstairs" },
      { label: "Pushing out of a chair with my hands", value: "gentle", art: "chair" },
      { label: "Feeling folded forward in photos", value: "gentle", art: "posture" },
      { label: "Saying no to plans because I feel unsure", value: "both", art: "calendar" }
    ]
  },
  {
    section: "Future Cost",
    title: "If nothing changes, what worries you most?",
    subtitle: "This is the honest part. No one buys a plan because life is already perfect.",
    name: "worry",
    answers: [
      { label: "My knees keep shrinking my world", value: "knees", art: "smallworld" },
      { label: "I keep getting stiffer every month", value: "gentle", art: "calendar" },
      { label: "I lose balance and independence", value: "both", art: "balance" },
      { label: "I never rebuild the habit", value: "gentle", art: "routine" }
    ]
  },
  {
    section: "Starting Point",
    title: "What would you actually do this week?",
    subtitle: "The best plan is the one you can repeat when motivation is not visiting.",
    name: "start",
    answers: [
      { label: "5 focused minutes for my knees", value: "knees", art: "clock" },
      { label: "A clear 7-day full-body reset", value: "gentle", art: "plan" },
      { label: "Short routines I can rotate forever", value: "gentle", art: "routine" },
      { label: "Start broad, then fix knees next", value: "both", art: "route" }
    ]
  }
];

const state = {
  step: -1,
  answers: {}
};

const screen = document.querySelector("#screen");
const backButton = document.querySelector("#back-button");
const progressFill = document.querySelector("#progress-fill");
const sectionLabel = document.querySelector("#section-label");

function template(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function render() {
  if (state.step === -1) return renderIntro();
  if (state.step === 1 && !state.seenTrust) return renderTrust();
  if (state.step >= questions.length) return renderLoadingThenResult();
  renderQuestion();
}

function renderIntro() {
  sectionLabel.textContent = "Movement Check";
  progressFill.style.width = "0%";
  backButton.hidden = true;
  screen.replaceChildren(template("#intro-template"));
}

function renderTrust() {
  sectionLabel.textContent = "Why it matters";
  progressFill.style.width = "18%";
  backButton.hidden = false;
  screen.replaceChildren(template("#trust-template"));
}

function renderQuestion() {
  const question = questions[state.step];
  sectionLabel.textContent = question.section;
  backButton.hidden = false;
  progressFill.style.width = `${((state.step + 1) / questions.length) * 100}%`;

  const fragment = template("#question-template");
  fragment.querySelector("#question-title").textContent = question.title;
  fragment.querySelector("#question-subtitle").textContent = question.subtitle;

  const grid = fragment.querySelector("#answer-grid");
  grid.classList.toggle("two-col", question.answers.length === 4);
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-card";
    button.type = "button";
    button.dataset.value = answer.value;
    button.innerHTML = `
      <div class="art ${answer.art}" aria-hidden="true">
        <img src="${imageForArt(answer.art)}" alt="" loading="eager" />
      </div>
      <span>${answer.label}</span>
    `;
    button.addEventListener("click", () => {
      state.answers[question.name] = answer.value;
      state.step += 1;
      render();
    });
    grid.appendChild(button);
  });

  screen.replaceChildren(fragment);
}

function renderLoadingThenResult() {
  sectionLabel.textContent = "Matching";
  progressFill.style.width = "100%";
  backButton.hidden = true;
  screen.replaceChildren(template("#loading-template"));
  window.setTimeout(renderResult, 1200);
}

function renderResult() {
  const key = scoreQuiz();
  const product = products[key];
  const fragment = template("#result-template");

  sectionLabel.textContent = "Result";
  fragment.querySelector("#result-title").textContent = product.title;
  fragment.querySelector("#risk-box").textContent = product.risk;
  fragment.querySelector("#result-copy").textContent = product.copy;
  fragment.querySelector("#result-image").src = product.image;
  fragment.querySelector("#result-image").alt = product.title;
  fragment.querySelector("#result-bullets").innerHTML = product.bullets.map((item) => `<li>${item}</li>`).join("");

  const primary = fragment.querySelector("#primary-cta");
  primary.href = product.url;
  primary.textContent = product.cta;

  const secondary = fragment.querySelector("#secondary-cta");
  secondary.href = product.otherUrl;
  secondary.textContent = product.otherLabel;

  localStorage.setItem("claire-quiz-result", key);
  screen.replaceChildren(fragment);
}

function scoreQuiz() {
  const score = { gentle: 0, knees: 0, both: 0 };
  Object.values(state.answers).forEach((value) => {
    if (value === "both") {
      score.both += 1;
      score.gentle += 0.65;
      score.knees += 0.65;
      return;
    }
    score[value] += 1;
  });

  if (score.knees >= 3 && score.gentle >= 2) return "both";
  if (score.knees > score.gentle) return "knees";
  if (score.both >= 3) return "both";
  return "gentle";
}

function goBack() {
  if (state.step === -1) return;
  if (state.step === 1 && !state.seenTrust) {
    state.step = 0;
    render();
    return;
  }
  state.step = Math.max(-1, state.step - 1);
  render();
}

function imageForArt(type) {
  const base = "./assets/quiz-art/";
  const map = {
    age40: "age-40.png",
    age50: "age-50.png",
    age60: "age-60.png",
    age70: "age-70.png",
    knees: "knees.png",
    stairs: "stairs.png",
    downstairs: "stairs.png",
    chair: "chair-rise.png",
    stiff: "stiff-morning.png",
    balance: "balance-wall.png",
    video: "wall-pushup.png",
    walk: "gentle-walk.png",
    floor: "chair-rise.png",
    hips: "hip-stretch.png",
    posture: "posture.png",
    whole: "route-progress.png",
    calendar: "calendar.png",
    smallworld: "route-progress.png",
    routine: "calendar.png",
    clock: "heel-raise.png",
    plan: "calendar.png",
    route: "route-progress.png"
  };
  return base + (map[type] || "route-progress.png");
}

screen.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "start") {
    state.step = 0;
    render();
  }

  if (action === "continue") {
    state.seenTrust = true;
    render();
  }

  if (action === "restart") {
    state.step = -1;
    state.seenTrust = false;
    state.answers = {};
    render();
  }
});

backButton.addEventListener("click", goBack);

render();
