document.getElementById("loadEvents").addEventListener("click", async () => {
    try {
        const response = await fetch("/api/events"); // Request events from backend
        const events = await response.json();

        const eventList = document.getElementById("eventList");
        eventList.innerHTML = ""; // Clear previous events

        events.forEach(event => {
            const li = document.createElement("li");
            li.textContent = `${event.event_name} - ${event.event_date} at ${event.event_location}`;
            eventList.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching events:", error);
    }
});