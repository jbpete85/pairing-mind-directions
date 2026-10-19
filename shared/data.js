// Prototype content. Sample student and projects are made up.
window.PM = {
  student: { first: "Sam", connected: "Claude" },
  classes: [
    { n: 1, title: "Getting started with AI", date: "Tue, Oct 20", color: "#367CFF", icon: "rocket-launch", state: "today",
      purpose: "Set up your AI, find your project ideas in the Context Interview, and build a small app." },
    { n: 2, title: "Prompting and iteration", date: "Thu, Oct 22", color: "#FF6A3D", icon: "chat-circle-dots", state: "next",
      purpose: "Compare a short request with one that gives clear direction, then improve the result." },
    { n: 3, title: "Research you can check", date: "Tue, Oct 27", color: "#12B886", icon: "magnifying-glass", state: "upcoming", purpose: "Find sources, check them, keep what holds up." },
    { n: 4, title: "Make it yours", date: "Thu, Oct 29", color: "#F5A524", icon: "user-focus", state: "upcoming", purpose: "A profile and your first reusable skill." },
    { n: 5, title: "Build it", date: "Tue, Nov 3", color: "#7C5CFF", icon: "hammer", state: "upcoming", purpose: "Build the working version of your project." },
    { n: 6, title: "Make it real", date: "Thu, Nov 5", color: "#0EA5C6", icon: "database", state: "upcoming", purpose: "Store data, share it, test it in real use." },
    { n: 7, title: "Connect it", date: "Tue, Nov 10", color: "#E14C9B", icon: "plugs-connected", state: "upcoming", purpose: "Automations that move work between your apps." },
    { n: 8, title: "Helpers on a job", date: "Thu, Nov 12", color: "#84B819", icon: "robot", state: "upcoming", purpose: "Agents that carry out a task for you." },
    { n: 9, title: "Finish and package", date: "Tue, Nov 17", color: "#FF8A00", icon: "package", state: "upcoming", purpose: "Make it usable without you in the room." },
    { n: 10, title: "Demo day", date: "Thu, Nov 19", color: "#26282B", icon: "presentation-chart", state: "upcoming", purpose: "Show what you built and what's next." },
  ],
  steps: [
    { kind: "Setup", title: "Connect your AI", text: "Sign in to your workspace and connect Claude. Done once.", done: true },
    { kind: "Pinpoint", title: "Context Interview", text: "Claude interviews you about your work and life and suggests a few project ideas.",
      prompt: "Use Pairing Mind to start my project interview for Class 1. Show my projects, then help me explore several useful ideas. Ask one question at a time." },
    { kind: "Record", title: "Save your starting projects", text: "Approve the update. Your ideas appear in Projects." },
    { kind: "Ask", title: "Get a build brief", text: "Claude turns one idea into a brief with two checks and one improvement.",
      prompt: "Use Pairing Mind to help me choose a small first AI Studio app from my projects. Give me a build brief, two checks and one small improvement." },
    { kind: "Inspect", title: "Build and check it", text: "Paste the brief into Google AI Studio. Run the two checks. Change one thing." },
    { kind: "Record", title: "Record the result", text: "Give Claude the link and what your checks showed, then approve.",
      prompt: "Use Pairing Mind to record my Class 1 app. Ask me for the link, the checks I tried and the change I made. Prepare the update for my review." },
  ],
  projects: [
    { title: "Weekly meal plan", area: "Home", status: "Trying it", next: "Pick three dinners you repeat.", color: "#12B886", icon: "cooking-pot" },
    { title: "Customer follow-up emails", area: "Work", status: "Idea", next: "Collect three sample messages.", color: "#FF6A3D", icon: "envelope-simple" },
    { title: "Reading notes for school", area: "School", status: "Ready to check", next: "Compare with the teacher's outline.", color: "#7C5CFF", icon: "book-open" },
  ],
};
window.PM.copy = (btn, text) => {
  const done = () => { const o = btn.dataset.label || btn.textContent; btn.dataset.label = o; btn.classList.add("copied"); btn.querySelector(".lbl") ? (btn.querySelector(".lbl").textContent = "Copied") : (btn.textContent = "Copied"); setTimeout(() => { btn.classList.remove("copied"); btn.querySelector(".lbl") ? (btn.querySelector(".lbl").textContent = o) : (btn.textContent = o); }, 1600); };
  (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(done, done);
};
window.PM.route = (render) => { const go = () => { render(location.hash.slice(1) || "home"); window.scrollTo(0, 0); }; addEventListener("hashchange", go); go(); };
