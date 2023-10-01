document.addEventListener("DOMContentLoaded", function () {
    const appointmentsList = document.getElementById("appointments-list");
    // Función para cargar y mostrar las citas agendadas desde el localStorage
    function loadAppointments() {
        // Obtener las citas agendadas desde el localStorage
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        // Limpiar la lista de citas antes de mostrar las nuevas
        appointmentsList.innerHTML = "";
        // Mostrar las citas agendadas en la lista
        storedAppointments.forEach(appointment => {
            const listItem = document.createElement("li");
            listItem.textContent = `Cliente: ${appointment.customerName}, Barbero: ${appointment.barber}, Corte: ${appointment.haircut}, Fecha: ${appointment.appointmentDate}`;
            appointmentsList.appendChild(listItem);
        });
    }
    // Cargar y mostrar las citas agendadas al cargar la página
    loadAppointments();

});