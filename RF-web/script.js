
function showThankYou(event) {
    event.preventDefault(); // Stop form from actually submitting
    alert("🎉Thank you for contacting us!");
    // Optional: Clear the form
    document.querySelector('.contact-form').reset();
}
function showLoginPopup(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert("👏🏻Login successful!");
    document.querySelector('form').reset(); // Optional: Reset the form
  }
