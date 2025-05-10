document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form submission

  // Get values of all inputs
  let name = document.querySelector("#fullName").value;
  let email = document.querySelector("#email").value;
  let phone = document.querySelector("#phone").value;
  let address = document.querySelector("#address").value;
  let linkedin = document.querySelector("#linkedin").value;

  let languages = [];
  if (document.querySelector("#langEnglish").checked) languages.push("English");
  if (document.querySelector("#langHindi").checked) languages.push("Hindi");
  if (document.querySelector("#langPunjabi").checked) languages.push("Punjabi");

  // Collect all tech skills
  let techSkills = Array.from(document.querySelectorAll(".techSkills"))
    .map(input => input.value)
    .filter(value => value.trim() !== "")
    .join(", ");

  // Collect all non-tech skills
  let nonTechSkills = Array.from(document.querySelectorAll(".nonTechSkills"))
    .map(input => input.value)
    .filter(value => value.trim() !== "")
    .join(", ");

  // Collect education details
  let educationBlocks = document.querySelectorAll("#educationContainer > div");
  let educationList = [];
  educationBlocks.forEach(block => {
    let inputs = block.querySelectorAll("input");
    if (inputs.length === 3) {
      let inst = inputs[0].value;
      let deg = inputs[1].value;
      let year = inputs[2].value;
      educationList.push(`${deg}, ${inst} (${year})`);
    }
  });

  // Collect experience
  let experienceBlocks = document.querySelectorAll("#experienceContainer > div");
  let experienceList = [];
  experienceBlocks.forEach(block => {
    let inputs = block.querySelectorAll("input");
    let desc = block.querySelector("textarea")?.value || "";
    if (inputs.length === 3) {
      let company = inputs[0].value;
      let role = inputs[1].value;
      let duration = inputs[2].value;
      experienceList.push(`<strong>${role}</strong> at ${company} (${duration})<br>${desc}`);
    }
  });

  // Projects
  let projectBlocks = document.querySelectorAll("#projectContainer > div");
  let projectList = [];
  projectBlocks.forEach(block => {
    let inputs = block.querySelectorAll("input");
    let desc = block.querySelector("textarea")?.value || "";
    if (inputs.length === 2) {
      let projectName = inputs[0].value;
      let link = inputs[1].value;
      projectList.push(`<strong>${projectName}</strong> <a href="${link}" target="_blank">${link}</a><br>${desc}`);
    }
  });

  // Certifications
  let certificateBlocks = document.querySelectorAll("#certificateContainer > div");
  let certificateList = [];
  certificateBlocks.forEach(block => {
    let inputs = block.querySelectorAll("input");
    if (inputs.length === 3) {
      certificateList.push(`${inputs[0].value} from ${inputs[1].value} (${inputs[2].value})`);
    }
  });

  // Final resume HTML
  let resumeHTML = `
    <div class="header">
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email} &nbsp;|&nbsp; 
         <strong>Phone:</strong> ${phone} &nbsp;|&nbsp; 
         <strong>Address:</strong> ${address}</p>
      <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    </div>
    <hr>
    <h3>Technical Skills</h3>
    <p>${techSkills}</p>

    <h3>Non-Technical Skills</h3>
    <p>${nonTechSkills}</p>

    <h3>Education</h3>
    ${educationList.map(ed => `<p>${ed}</p>`).join("")}

    <h3>Experience</h3>
    ${experienceList.map(exp => `<p>${exp}</p>`).join("")}

    <h3>Projects</h3>
    ${projectList.map(pro => `<p>${pro}</p>`).join("")}

    <h3>Certifications</h3>
    ${certificateList.map(cert => `<p>${cert}</p>`).join("")}

    <h3>Languages</h3>
    <p>${languages.join(", ")}</p>
  `;

  let outputDiv = document.querySelector("#generatedResume");
  outputDiv.innerHTML = resumeHTML;
  outputDiv.style.display = "block";

  outputDiv.scrollIntoView({ behavior: "smooth" });
});
 

   

    
