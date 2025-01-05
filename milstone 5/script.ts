// Get references to the form elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
const resumeDisplay = document.getElementById('resume-disply') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Function to generate the resume
function generateResume(): void {
    // Get the values from the form inputs
    const username = usernameInput.value;
    const name = nameInput.value;
    const email = emailInput.value;
    const contact = contactInput.value;
    const education = educationInput.value;
    const experience = experienceInput.value;
    const skills = skillsInput.value;

    // Create the dynamic resume HTML
    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Experience:</h3>
        <p>${experience}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;

    // Display the generated resume
    resumeDisplay.innerHTML = resumeHTML;

    // Display the shareable link and download options
    shareableLinkContainer.style.display = 'block';

    // Generate a shareable link (simulating here with the current page URL)
    const shareableUrl = `${window.location.href}?username=${encodeURIComponent(username)}`;
    shareableLink.href = shareableUrl;
    shareableLink.textContent = shareableUrl;
}

// Event listener for the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    generateResume();
});

// Example: Function to handle the PDF download (use jsPDF library to generate PDF)
downloadButton.addEventListener('click', () => {
    const doc = new jsPDF();
    
    // Generate resume content for PDF (you can format this as you wish)
    const resumeContent = `
        ${nameInput.value}'s Resume\n
        Username: ${usernameInput.value}\n
        Email: ${emailInput.value}\n
        Contact: ${contactInput.value}\n
        Education: ${educationInput.value}\n
        Experience: ${experienceInput.value}\n
        Skills: ${skillsInput.value}
    `;

    // Add the content to the PDF
    doc.text(resumeContent, 10, 10);
    doc.save(`${usernameInput.value}_resume.pdf`);
});

