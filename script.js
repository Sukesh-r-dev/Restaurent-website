document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("reservationForm");

    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your table reservation request has been submitted successfully.");
        reservationForm.reset();
    });
});
