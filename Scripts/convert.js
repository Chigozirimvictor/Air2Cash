function mtn() {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("user_id");
  
    if (!token || !id) {
        console.error("Token or user ID is missing");
        return;
    }
  
    $.ajax({
        type: "GET",
        url: "/your-account-balance-url",
        headers: {
            'Authorization': `Bearer ${token}`  
        },
        data: {
            'user_id': id
        },
        success: function (data) {
            if (data.status === 'success') {
                $("#account_balance").html(data.amount);
            } else {
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
    const id = sessionStorage.getItem("user_id");
  
    if (!token || !id) {
        console.error("Token or user ID is missing");
        return;
    }
  
    $.ajax({
        type: "GET",
        url: "/your-account-balance-url",
        headers: {
            'Authorization': `Bearer ${token}`  
        },
        data: {
            'user_id': id
        },
        success: function (data) {
            if (data.status === 'success') {
                $("#account_balance").html(data.amount);
            } else {
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
    const id = sessionStorage.getItem("user_id");
  
    if (!token || !id) {
        console.error("Token or user ID is missing");
        return;
    }
  
    $.ajax({
        type: "GET",
        url: "/your-account-balance-url",
        headers: {
            'Authorization': `Bearer ${token}`  
        },
        data: {
            'user_id': id
        },
        success: function (data) {
            if (data.status === 'success') {
                $("#account_balance").html(data.amount);
            } else {
                console.error("Unexpected response:", data);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error:", status, error);
        }
    });
  };