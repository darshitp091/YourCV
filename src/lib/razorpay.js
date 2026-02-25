export const loadRazorpay = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

export const triggerCheckout = async ({ userId, fullName, email, amount, successCallback }) => {
    const res = await loadRazorpay();

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // Create order on server
    const response = await fetch("/api/payments/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
    });

    const order = await response.json();

    if (order.error) {
        alert("Order creation failed: " + order.error);
        return;
    }

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: order.amount,
        currency: order.currency,
        name: "YourCV",
        description: "Premium Plan Subscription",
        image: "/logo.png", // Path to your logo
        order_id: order.id,
        handler: function (response) {
            // This is called on payment success
            // response.razorpay_payment_id
            // response.razorpay_order_id
            // response.razorpay_signature
            if (successCallback) successCallback(response);
        },
        prefill: {
            name: fullName,
            email: email,
        },
        notes: {
            userId: userId,
        },
        theme: {
            color: "#0D6E6E", // Primary teal
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};
