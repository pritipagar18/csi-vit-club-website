// Show welcome alert when the page loads
window.onload = function () {
    alert("Welcome to the Computer Society of India – Pune Chapter!");
};
//time and date 
function displayDateTime() {
    const dateTime = new Date();
    const localTime = dateTime.toLocaleString(); // Converts date and time to local format
    document.getElementById("currentDateTime").innerHTML = localTime;
}