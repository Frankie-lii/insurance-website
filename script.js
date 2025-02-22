document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Toggle mobile menu when menu icon is clicked
    menuIcon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevents event bubbling
        navLinks.classList.toggle("nav-active");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove("nav-active");
        }
    });
});




document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBar.classList.remove('show');
    }
});

document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let insuranceType = document.getElementById("insurance-type").value;
    let quoteResult = document.getElementById("quoteResult");
    let estimatedCost;

    // Simple price estimates based on insurance type
    switch (insuranceType) {
        case "auto":
            estimatedCost = "$50 - $200 per month";
            break;
        case "health":
            estimatedCost = "$100 - $500 per month";
            break;
        case "home":
            estimatedCost = "$30 - $150 per month";
            break;
        case "life":
            estimatedCost = "$20 - $300 per month";
            break;
        case "business":
            estimatedCost = "$80 - $400 per month";
            break;
        default:
            estimatedCost = "Please select an insurance type";
    }

    quoteResult.innerHTML = `Estimated Cost: <strong>${estimatedCost}</strong>`;
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Display a thank-you message
        alert("Thank you for your message! We will contact you soon.");
        // Reset the form fields
        contactForm.reset();
    });
});