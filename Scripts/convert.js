const initializeAirtime = async (event, network) => {
    event.preventDefault();
    const token = sessionStorage.getItem("token");

    if (!token) {
        console.error("Token is missing");
        Swal.fire({
            icon: "error",
            title: "Authentication Error",
            text: "User token is missing. Please log in again.",
        });
        return;
    }

    try {
        const response = await fetch("https://testing1-xpjd.onrender.com/api/airtime/initialize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ network }),
        });

        const data = await response.json();

        if (response.ok && data.status === "success") {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: data.message,
            });
            document.getElementById("msg").innerHTML = data.phone;
            document.getElementById("receiverPhone").value = data.phone;
            document.getElementById("network").value = network;
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: data.message.message || "An unexpected error occurred.",
            });
            console.error("Unexpected response:", data);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to process the request. Please try again later.",
        });
    }
};

// Event handlers for specific networks
const mtn = (event) => initializeAirtime(event, "mtn");
const glo = (event) => initializeAirtime(event, "glo");
const airtel = (event) => initializeAirtime(event, "airtel");

// Attach event listeners to buttons
document.getElementById("mtnButton").addEventListener("click", mtn);
document.getElementById("gloButton").addEventListener("click", glo);
document.getElementById("airtelButton").addEventListener("click", airtel);
