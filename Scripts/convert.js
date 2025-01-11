function mtn() {
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
        data: {
            'network': "mtn"
        },
        success: function (data) {
            if (data.status === 'success') {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: data.message,
                })
                $("#msg").html(data.phone);
                $("#receiverPhone").val(data.phone);
                const network = "mtn";
                $("#network").val(network);;
            } else {
                Swal.fire({
                    icon: "error",
                    title: "error",
                    text: data.message.message,
                })
                console.error("Unexpected response:", data);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error);
        }
    });
};

function glo() {
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
        data: {
            'network': "glo"
        },
        success: function (data) {
            if (data.status === 'success') {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: data.message,
                })
                $("#msg").html(data.phone);
                $("#receiverPhone").val(data.phone);
                const network = "glo"
                $("#network").val(network);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "error",
                    text: data.message.message,
                })
                console.error("Unexpected response:", data);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error);
        }
    });
};


function airtel() {
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
        data: {
            'network': 'airtel'
        },
        success: function (data) {
            if (data.status === 'success') {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: data.message,
                });
                $("#msg").html(data.phone);
                $("#receiverPhone").val(data.phone);
                $("#receiverPhone").val(data.phone);
                const network = "airtel"
                $("#network").val(network);
            } else {

                Swal.fire({
                    icon: "error",
                    title: "error",
                    text: data.message.message,
                })
                console.error("Unexpected response:", data);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error);
        }
    });
};




