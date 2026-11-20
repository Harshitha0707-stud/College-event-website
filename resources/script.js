// Filter events by category
function filterEvents(category) {
    const cards = document.querySelectorAll('.event-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button styling
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Show/hide cards
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Open registration modal
function openModal(eventName) {
    document.getElementById('selectedEvent').value = eventName;
    document.getElementById('registerModal').style.display = 'flex';
}

// Close registration modal
function closeModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('registerModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Handle form submission
function submitRegistration(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value;
    const eventName = document.getElementById('selectedEvent').value;

    alert(`Thank you, ${name}! You have successfully registered for ${eventName}.`);
    document.getElementById('registrationForm').reset();
    closeModal();
}
