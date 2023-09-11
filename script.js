const jobTitles = [
  "Systems Programmer",
  "Software Engineer",
  "Frontend Developer",
];

const programmingLanguages = [
  "C++",
  "Java",
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Flutter",
  "Next.js",
  "Rust",
  "Flask",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Flutter",
];

const changeJobTitle = () => {
  let iter = 0;
  const jobTitle = document.getElementById("job-title");
  const savedTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const interval = setInterval(() => {
    jobTitle.innerText = savedTitle
      .split("")
      .map((letter, idx) => {
        if (idx < iter) {
          return savedTitle[idx];
        }
        return alphabets[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iter > savedTitle.length) {
      clearInterval(interval);
    }
    iter += 1 / 3;
  }, 30);
};

const changeLanguageTitle = () => {
  let iter = 0;
  const jobTitle = document.getElementById("language-title");
  const savedTitle =
    programmingLanguages[
      Math.floor(Math.random() * programmingLanguages.length)
    ];
  // console.log(savedTitle);
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const interval = setInterval(() => {
    jobTitle.innerText = savedTitle
      .split("")
      .map((letter, idx) => {
        if (idx < iter) {
          return savedTitle[idx];
        }
        return alphabets[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iter > savedTitle.length) {
      clearInterval(interval);
      // console.log("Interval Cleared.");
    }
    iter += 1 / 3;
  }, 30);
};

const slide = () => {
  const container = document.querySelector(".hobby-card-container");
  let isDragging = false;
  let startPositionX = 0;
  let translateX = 0;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startPositionX = e.clientX;
    container.style.transition = "none";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startPositionX;
    translateX += deltaX;
    container.style.transform = `translate(calc(${translateX}pt), 35%)`;
    startPositionX = currentX;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
    container.style.transition = "transform 0.3s ease";
  });

  container.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      container.style.transition = "transform 0.3s ease";
    }
  });
};

const showContactDetails = () => {
  findMe = document.getElementById("contact-me");
  email = document.getElementById("email-info");
  phone = document.getElementById("phone-info");
  address = document.getElementById("address-info");

  findMe.addEventListener("mouseover", () => {
    console.log("in");
    email.style.display = "flex";
    email.style.justifyContent = "center";
    email.style.alignItems = "center";
    phone.style.display = "flex";
    phone.style.justifyContent = "center";
    phone.style.alignItems = "center";
    address.style.display = "flex";
    address.style.justifyContent = "center";
    address.style.alignItems = "center";
  });
  findMe.addEventListener("mouseout", () => {
    email.style.display = "none";
    phone.style.display = "none";
    address.style.display = "none";
  });
};

// call function to change job and language.
setInterval(() => {
  changeJobTitle();
}, Math.random() * 4000 + 4000);

setInterval(() => {
  changeLanguageTitle();
}, 2500);

slide();

showContactDetails();
