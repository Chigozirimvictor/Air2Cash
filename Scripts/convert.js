function initializeAirtime(event, network) {
    event.preventDefault();
    const token = sessionStorage.getItem("token");

    if (!token) {
        console.error("Token or user ID is missing");
        return;
    }

    $.ajax({
        type: "post",
        url: "https://testing1-xpjd.onrender.com/api/airtime/initialize",
        headers: {
            'Authorization': `Bearer ${token}`
        },
        data: { network },
        success: function (data) {
            if (data.status === 'success') {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: data.message,
                });
                $("#msg").html(data.phone);
                $("#receiverPhone").val(data.phone);
                $("#network").val(network);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: data.message.message || "An unexpected error occurred",
                });
                console.error("Unexpected response:", data);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to process the request. Please try again later.",
            });
        }
    });
}

// Usage for specific networks
function mtn(event) {
    initializeAirtime(event, "mtn");
}

function glo(event) {
    initializeAirtime(event, "glo");
}

function airtel(event) {
    initializeAirtime(event, "airtel");
}
