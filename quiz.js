document.addEventListener("DOMContentLoaded", () => {
  const styleProfiles = {
    driver: {
      label: "The Driver",
      influence: "Driver",
      animal: "Lion",
      emoji: "🦁",
      contribution: "You tend to create movement by clarifying what matters, taking responsibility and helping work progress.",
      strengths: ["Turning priorities into action", "Taking responsibility when direction is needed", "Helping a team regain momentum"],
      growth: ["Pause long enough to bring other perspectives into the direction", "Share ownership before carrying too much yourself"]
    },
    connector: {
      label: "The Connector",
      influence: "Connector",
      animal: "Panda",
      emoji: "🐼",
      contribution: "You tend to strengthen work by understanding people, making space for contribution and building trust around a shared purpose.",
      strengths: ["Reading how people are experiencing the work", "Building participation and common ground", "Helping people contribute with confidence"],
      growth: ["Make your own position visible as well as supporting others", "Address difficult issues before harmony begins to slow progress"]
    },
    strategist: {
      label: "The Strategist",
      influence: "Strategist",
      animal: "Fox",
      emoji: "🦊",
      contribution: "You tend to improve decisions by observing carefully, testing assumptions and understanding what may be happening beneath the surface.",
      strengths: ["Seeing patterns and possible consequences", "Asking questions that improve understanding", "Bringing considered judgement to unfamiliar work"],
      growth: ["Share useful thinking before every detail feels complete", "Set a point at which reflection becomes action"]
    },
    stabiliser: {
      label: "The Stabiliser",
      influence: "Stabiliser",
      animal: "Elephant",
      emoji: "🐘",
      contribution: "You tend to make work dependable by creating clarity, organising responsibilities and following important details through to completion.",
      strengths: ["Creating structure from complex requirements", "Keeping responsibilities and details visible", "Following through consistently"],
      growth: ["Leave room to adapt when the situation changes", "Look beyond the assigned task when the wider work needs initiative"]
    }
  };

  const motivationProfiles = {
    progress: "You seem like someone who gains energy from creating movement and seeing useful work take shape.",
    connection: "You seem like someone who gains meaning from helping people feel included and able to contribute.",
    understanding: "You seem like someone who enjoys understanding what is happening beneath the surface before deciding what to do.",
    responsibility: "You seem like someone who takes commitments seriously and wants work to be handled properly."
  };

  const option = (key, text, style, motivation, signals) => ({ key, text, style, motivation, signals });

  const questions = [
    {
      text: "You join a team that has already started working on an important project. What are you most likely to do first?",
      options: [
        option("A", "Look at what is already happening, identify where progress is needed and offer to take responsibility.", "driver", "progress", ["observation", "initiative", "responsibility"]),
        option("B", "Speak with team members, understand how they work together and identify how you could support them.", "connector", "connection", ["empathy", "perspective", "support"]),
        option("C", "Review what has already been done, observe how the team approaches the work and then decide where you could contribute.", "strategist", "understanding", ["observation", "analysis", "curiosity"]),
        option("D", "Clarify the existing plan, understand what is expected from you and organise the responsibilities assigned to you.", "stabiliser", "responsibility", ["organisation", "reliability", "needForClarity"])
      ]
    },
    {
      text: "You are asked to complete a task that you have not done before, and there is not much time. What would you naturally do?",
      options: [
        option("A", "Find someone who has completed similar work, ask how they approached it and understand how your task fits into the wider work.", "connector", "connection", ["perspective", "curiosity", "collaboration"]),
        option("B", "Go through what has been provided, make a list of what needs to be delivered and organise the work within the time limit.", "stabiliser", "responsibility", ["organisation", "reliability", "needForClarity"]),
        option("C", "Look at what needs to be ready first, begin with that part and work through the remaining gaps as you go.", "driver", "progress", ["initiative", "adaptability", "comfortWithUncertainty"]),
        option("D", "Look through previous examples and background information, consider what could cause problems and decide how you will approach the task.", "strategist", "understanding", ["analysis", "riskAwareness", "observation"])
      ]
    },
    {
      text: "You think of a way that a project could work better, but you are still new to the team. What would you naturally do?",
      options: [
        option("A", "Look into the idea further, find examples that support it and prepare to explain why it could work.", "strategist", "understanding", ["analysis", "curiosity", "selfAdvocacy"]),
        option("B", "Raise the idea with the team, explain the improvement it could create and suggest how it could be taken forward.", "driver", "progress", ["initiative", "selfAdvocacy", "progress"]),
        option("C", "Check the existing requirements, consider how the idea could fit within them and work out what would need to change.", "stabiliser", "responsibility", ["organisation", "riskAwareness", "adaptability"]),
        option("D", "Discuss the idea with a few team members, listen to their perspectives and use their feedback to develop it further.", "connector", "connection", ["perspective", "collaboration", "feedbackOpenness"])
      ]
    },
    {
      text: "Your team is beginning a large project with several people and responsibilities involved. What part would you naturally begin with?",
      options: [
        option("A", "Write down what needs to be completed, organise the responsibilities and build a practical timeline.", "stabiliser", "responsibility", ["organisation", "reliability", "needForClarity"]),
        option("B", "Go through the available information, consider the different possibilities and identify challenges that may need attention.", "strategist", "understanding", ["analysis", "riskAwareness", "curiosity"]),
        option("C", "Speak with the people involved, understand their strengths and availability and help the team decide how to work together.", "connector", "connection", ["empathy", "collaboration", "perspective"]),
        option("D", "Clarify what the project needs to achieve, identify the first priorities and help the team begin moving forward.", "driver", "progress", ["initiative", "responsibility", "progress"])
      ]
    },
    {
      text: "During a meeting, a quieter team member introduces an idea that receives little attention. Later, a confident senior member presents a similar idea and the group responds positively. What would you naturally do?",
      options: [
        option("A", "Bring the discussion back to the original contribution, explain why it deserves attention and make sure it is properly considered.", "driver", "progress", ["initiative", "recognitionSharing", "selfAdvocacy"]),
        option("B", "Acknowledge the original contributor, invite them back into the conversation and give them space to explain the idea further.", "connector", "connection", ["empathy", "inclusion", "recognitionSharing"]),
        option("C", "Point out the similarity between the two contributions, consider why they received different responses and encourage the group to reflect on it.", "strategist", "understanding", ["observation", "analysis", "inclusion"]),
        option("D", "Make sure the original idea and contributor are accurately recorded and refer back to that contribution as the discussion continues.", "stabiliser", "responsibility", ["recognitionSharing", "reliability", "accountability"])
      ]
    },
    {
      text: "A team member who was previously involved has stopped contributing consistently. What would you do first?",
      options: [
        option("A", "Speak with them privately, ask how they are managing and understand whether something is affecting their participation.", "connector", "connection", ["empathy", "perspective", "support"]),
        option("B", "Go through their responsibilities with them, clarify what still needs to be completed and agree on what the team can expect.", "stabiliser", "responsibility", ["organisation", "accountability", "needForClarity"]),
        option("C", "Look at what their absence is delaying, take action to cover the immediate gap and keep the work progressing.", "driver", "progress", ["initiative", "responsibility", "progress"]),
        option("D", "Look at when their participation changed, consider what may have contributed to it and decide what needs to be understood before responding.", "strategist", "understanding", ["observation", "analysis", "perspective"])
      ]
    },
    {
      text: "Two team members strongly disagree about the direction of a project, and the discussion is no longer moving forward. What would you naturally do?",
      options: [
        option("A", "Ask each person to explain the reasoning behind their position, compare the available information and identify where the real difference lies.", "strategist", "understanding", ["analysis", "perspective", "conflictEngagement"]),
        option("B", "Bring the discussion back to the decision that needs to be made, identify a workable direction and help the project continue.", "driver", "progress", ["initiative", "conflictEngagement", "progress"]),
        option("C", "Return to the purpose of the project, review how the decision should be made and use the agreed process to move forward.", "stabiliser", "responsibility", ["organisation", "conflictEngagement", "reliability"]),
        option("D", "Give both people space to explain what matters to them, identify any shared concerns and help them find common ground.", "connector", "connection", ["empathy", "perspective", "conflictEngagement"])
      ]
    },
    {
      text: "You are responsible for an important activity, and another team member would like to lead part of it. How would you respond?",
      options: [
        option("A", "Agree on what each person will be responsible for, establish how progress will be shared and make sure nothing is left unclear.", "stabiliser", "responsibility", ["organisation", "controlSharing", "needForClarity"]),
        option("B", "Look at the strengths and experience each of you brings, divide the responsibilities accordingly and agree on where each person can contribute most.", "strategist", "understanding", ["analysis", "controlSharing", "collaboration"]),
        option("C", "Sit down together, discuss how you could share ownership and agree on a way of working that gives both of you space to contribute.", "connector", "connection", ["inclusion", "controlSharing", "collaboration"]),
        option("D", "Explain the outcome that needs to be achieved, agree on the boundaries and give them the freedom to lead that part of the activity.", "driver", "progress", ["controlSharing", "responsibility", "initiative"])
      ]
    },
    {
      text: "A decision you supported contributes to a problem during an important activity. What would you do first?",
      options: [
        option("A", "Step forward, acknowledge your responsibility and organise the immediate action needed to address the problem.", "driver", "progress", ["accountability", "initiative", "responsibility"]),
        option("B", "Check how the problem has affected the people involved, listen to what they need and make sure they receive appropriate support.", "connector", "connection", ["empathy", "support", "accountability"]),
        option("C", "Gather the relevant information, work out what led to the problem and avoid reaching a conclusion before the situation is clear.", "strategist", "understanding", ["analysis", "accountability", "riskAwareness"]),
        option("D", "Record what happened, follow the appropriate response process and make sure the necessary actions are completed.", "stabiliser", "responsibility", ["reliability", "accountability", "organisation"])
      ]
    },
    {
      text: "An unexpected change means that the team’s original plan will no longer work. What would you naturally do?",
      options: [
        option("A", "Bring the team together, explain what has changed and understand how the change will affect the people involved.", "connector", "connection", ["empathy", "adaptability", "collaboration"]),
        option("B", "Update the plan, reorganise the responsibilities and adjust the timeline around the new situation.", "stabiliser", "responsibility", ["organisation", "adaptability", "reliability"]),
        option("C", "Identify what now requires immediate attention, establish a new direction and help the team begin moving again.", "driver", "progress", ["initiative", "adaptability", "comfortWithUncertainty"]),
        option("D", "Look at the available alternatives, consider the possible consequences and recommend the most suitable approach.", "strategist", "understanding", ["analysis", "adaptability", "riskAwareness"])
      ]
    },
    {
      text: "Someone with less experience than you questions an approach you have chosen. What would you naturally do first?",
      options: [
        option("A", "Consider whether they have noticed something you missed, look at the approach again and decide whether your thinking needs to change.", "strategist", "understanding", ["feedbackOpenness", "observation", "adaptability"]),
        option("B", "Explain what led you to the decision, consider whether their concern changes anything and decide whether the original direction should remain.", "driver", "progress", ["selfAdvocacy", "feedbackOpenness", "responsibility"]),
        option("C", "Compare their concern with the requirements and available evidence, check whether the approach remains appropriate and make any necessary adjustment.", "stabiliser", "responsibility", ["feedbackOpenness", "reliability", "analysis"]),
        option("D", "Invite them to explain their perspective, understand what led them to raise the concern and make sure they feel comfortable contributing.", "connector", "connection", ["empathy", "inclusion", "feedbackOpenness"])
      ]
    },
    {
      text: "You have completed an important project. When you look back at the experience, what would you naturally think about first?",
      options: [
        option("A", "Whether the responsibilities were completed, the important details were managed and the work was delivered properly.", "stabiliser", "responsibility", ["reliability", "accountability", "organisation"]),
        option("B", "What worked, what did not work and what the experience could teach you for the future.", "strategist", "understanding", ["analysis", "curiosity", "feedbackOpenness"]),
        option("C", "Whether people felt respected, supported and able to make a meaningful contribution.", "connector", "connection", ["empathy", "inclusion", "support"]),
        option("D", "Whether the project achieved its purpose and produced the outcome the team intended.", "driver", "progress", ["progress", "responsibility", "accountability"])
      ]
    }
  ];

  let state = { currentIndex: 0, answers: Array(questions.length).fill(null) };
  const byId = id => document.getElementById(id);
  const welcomeScreen = byId("welcomeScreen");
  const quizScreen = byId("quizScreen");
  const resultScreen = byId("resultScreen");
  const startBtn = byId("startBtn");
  const questionCounter = byId("questionCounter");
  const progressBar = byId("progressBar");
  const questionNumber = byId("questionNumber");
  const questionText = byId("questionText");
  const optionsContainer = byId("optionsContainer");
  const prevBtn = byId("prevBtn");
  const nextBtn = byId("nextBtn");
  const resultBadge = byId("resultBadge");
  const resultTitle = byId("resultTitle");
  const animalImage = byId("animalImage");
  const contributionText = byId("contributionText");
  const motivationText = byId("motivationText");
  const chronologyText = byId("chronologyText");
  const strengthsList = byId("strengthsList");
  const watchoutsList = byId("watchoutsList");
  const restartBtn = byId("restartBtn");
  const qrCodeImage = byId("qrCodeImage");

  const currentQuizUrl = `${window.location.origin}${window.location.pathname}?version=professional-style-5`;
  qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentQuizUrl)}`;

  function showScreen(name) {
    [welcomeScreen, quizScreen, resultScreen].forEach(screen => screen.classList.add("hidden"));
    byId(`${name}Screen`).classList.remove("hidden");
  }

  function renderQuestion() {
    const question = questions[state.currentIndex];
    const number = state.currentIndex + 1;
    questionCounter.textContent = `Question ${number} of ${questions.length}`;
    questionNumber.textContent = `Question ${number} of ${questions.length}`;
    progressBar.max = questions.length;
    progressBar.value = number;
    questionText.textContent = question.text;
    optionsContainer.innerHTML = "";

    question.options.forEach((answer, index) => {
      const label = document.createElement("label");
      const selected = state.answers[state.currentIndex] === answer.key;
      label.className = `option${selected ? " selected" : ""}`;
      label.innerHTML = `<input type="radio" name="question" value="${answer.key}" ${selected ? "checked" : ""}><div class="option-key">${answer.key}</div><div class="option-text">${answer.text}</div>`;
      label.addEventListener("click", () => {
        state.answers[state.currentIndex] = answer.key;
        document.querySelectorAll(".option").forEach(item => item.classList.remove("selected"));
        label.classList.add("selected");
        nextBtn.disabled = false;
      });
      optionsContainer.appendChild(label);
    });

    prevBtn.disabled = state.currentIndex === 0;
    nextBtn.disabled = !state.answers[state.currentIndex];
    nextBtn.textContent = number === questions.length ? "See Result" : "Next";
  }

  function selectedAnswers() {
    return state.answers.map((key, index) => questions[index].options.find(answer => answer.key === key));
  }

  function countValues(items, selector, initial) {
    const counts = { ...initial };
    items.forEach((item, index) => {
      const values = selector(item, index);
      (Array.isArray(values) ? values : [values]).filter(Boolean).forEach(value => { counts[value] = (counts[value] || 0) + 1; });
    });
    return counts;
  }

  function rankStyles(answers) {
    const fixedOrder = ["driver", "connector", "strategist", "stabiliser"];
    const scores = countValues(answers, answer => answer.style, Object.fromEntries(fixedOrder.map(style => [style, 0])));
    Object.keys(scores).forEach(style => { scores[style] *= 2; });
    const late = countValues(answers.slice(8), answer => answer.style, {});
    const stagePresence = Object.fromEntries(fixedOrder.map(style => [style, 0]));
    [[0, 4], [4, 8], [8, 12]].forEach(([start, end]) => {
      new Set(answers.slice(start, end).map(answer => answer.style)).forEach(style => { stagePresence[style] += 1; });
    });
    const firstSeen = Object.fromEntries(fixedOrder.map(style => [style, answers.findIndex(answer => answer.style === style)]));
    return [...fixedOrder].sort((a, b) =>
      scores[b] - scores[a] ||
      (late[b] || 0) - (late[a] || 0) ||
      stagePresence[b] - stagePresence[a] ||
      firstSeen[a] - firstSeen[b] ||
      fixedOrder.indexOf(a) - fixedOrder.indexOf(b)
    ).map(style => ({ style, score: scores[style] }));
  }

  function dominantMotivation(answers) {
    const motivations = ["progress", "connection", "understanding", "responsibility"];
    const scores = countValues(answers, answer => answer.motivation, Object.fromEntries(motivations.map(value => [value, 0])));
    const late = countValues(answers.slice(8), answer => answer.motivation, {});
    return motivations.sort((a, b) => scores[b] - scores[a] || (late[b] || 0) - (late[a] || 0) || motivations.indexOf(a) - motivations.indexOf(b))[0];
  }

  function dominantInStage(answers, start, end) {
    return rankStyles(answers.slice(start, end))[0].style;
  }

  const stagePhrases = {
    driver: "clarify the priority and create movement",
    connector: "understand the people involved and build participation",
    strategist: "observe the situation and understand what may affect the work",
    stabiliser: "create clarity around responsibilities and organise what needs to happen"
  };

  function buildChronology(answers) {
    const beginning = dominantInStage(answers, 0, 4);
    const collaboration = dominantInStage(answers, 4, 8);
    const responsibility = dominantInStage(answers, 8, 12);
    if (beginning === responsibility) {
      return `Your answers show a consistent tendency to ${stagePhrases[beginning]} across unfamiliar, collaborative and demanding situations. When other people are involved, you also draw on ${styleProfiles[collaboration].influence.toLowerCase()} qualities.`;
    }
    return `You may begin by trying to ${stagePhrases[beginning]}. When the work becomes more collaborative, you tend to ${stagePhrases[collaboration]}. Under responsibility or pressure, you seem more likely to ${stagePhrases[responsibility]}.`;
  }

  function buildPatternInsights(answers, primaryProfile, secondaryProfile) {
    const signals = countValues(answers, answer => answer.signals, {});
    const strengths = [];
    const growth = [];
    const add = (list, text) => { if (!list.includes(text)) list.push(text); };

    if ((signals.empathy || 0) >= 3 && (signals.perspective || 0) >= 2) add(strengths, "You seem attentive to how situations affect other people, while still trying to understand their perspective.");
    if ((signals.initiative || 0) >= 3 && (signals.observation || 0) >= 1) add(strengths, "You seem willing to act, but your answers also suggest that you look at what is already happening before stepping in.");
    if ((signals.responsibility || 0) >= 3 && (signals.reliability || 0) >= 2) add(strengths, "You seem to take responsibility seriously and pay attention to whether important work is carried through.");
    if ((signals.inclusion || 0) >= 2 && (signals.controlSharing || 0) >= 1) add(strengths, "You seem comfortable making room for other people to contribute and share ownership.");
    if ((signals.analysis || 0) >= 3 && (signals.curiosity || 0) >= 2) add(strengths, "You seem curious about why something is happening, not only what is visible at first.");
    if ((signals.adaptability || 0) >= 2) add(strengths, "You seem able to reconsider your approach when circumstances or new information change the work.");

    primaryProfile.strengths.forEach(item => add(strengths, item));
    secondaryProfile.strengths.slice(0, 1).forEach(item => add(strengths, item));

    if ((signals.empathy || 0) >= 3 && (signals.selfAdvocacy || 0) <= 1) add(growth, "Continue supporting other people, while making your own ideas, needs and boundaries equally visible.");
    if ((signals.initiative || 0) >= 3 && (signals.perspective || 0) <= 1) add(growth, "Before committing to a direction, create a deliberate point for other perspectives to influence it.");
    if ((signals.analysis || 0) >= 4 && (signals.initiative || 0) <= 1) add(growth, "Share your thinking while it is still developing so that reflection can begin shaping action earlier.");
    if ((signals.organisation || 0) >= 4 && (signals.adaptability || 0) <= 1) add(growth, "Build a little flexibility into plans so that structure continues to help when circumstances change.");
    primaryProfile.growth.forEach(item => add(growth, item));

    return { strengths: strengths.slice(0, 5), growth: growth.slice(0, 4) };
  }

  function populateList(target, items) {
    target.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      target.appendChild(li);
    });
  }

  function renderResult() {
    const answers = selectedAnswers();
    const ranked = rankStyles(answers);
    const primary = ranked[0];
    const secondary = ranked[1];
    const primaryProfile = styleProfiles[primary.style];
    const secondaryProfile = styleProfiles[secondary.style];
    const closeCombination = primary.score - secondary.score <= 2;
    const patternInsights = buildPatternInsights(answers, primaryProfile, secondaryProfile);

    resultBadge.textContent = `${primaryProfile.emoji} ${secondaryProfile.emoji} Your result`;
    resultTitle.textContent = `${primaryProfile.label} with a ${secondaryProfile.influence} influence`;
    contributionText.textContent = closeCombination
      ? `You show a close combination of two ways of contributing. ${primaryProfile.contribution} Your ${secondaryProfile.influence.toLowerCase()} influence also means that ${secondaryProfile.contribution.charAt(0).toLowerCase()}${secondaryProfile.contribution.slice(1)}`
      : `${primaryProfile.contribution} Your ${secondaryProfile.influence.toLowerCase()} influence also means that ${secondaryProfile.contribution.charAt(0).toLowerCase()}${secondaryProfile.contribution.slice(1)}`;
    motivationText.textContent = motivationProfiles[dominantMotivation(answers)];
    chronologyText.textContent = buildChronology(answers);
    animalImage.src = `outcome-images/${primary.style}-${secondary.style}.webp`;
    animalImage.alt = `${primaryProfile.animal} and ${secondaryProfile.animal} professional style illustration`;
    populateList(strengthsList, patternInsights.strengths);
    populateList(watchoutsList, patternInsights.growth);
    showScreen("result");
  }

  startBtn.addEventListener("click", () => { showScreen("quiz"); renderQuestion(); });
  prevBtn.addEventListener("click", () => { if (state.currentIndex > 0) { state.currentIndex -= 1; renderQuestion(); } });
  nextBtn.addEventListener("click", () => {
    if (!state.answers[state.currentIndex]) return;
    if (state.currentIndex < questions.length - 1) { state.currentIndex += 1; renderQuestion(); } else { renderResult(); }
  });
  restartBtn.addEventListener("click", () => {
    state = { currentIndex: 0, answers: Array(questions.length).fill(null) };
    showScreen("welcome");
  });
  showScreen("welcome");
});
