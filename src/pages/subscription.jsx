import React, { useState } from "react";
import Nav2 from "../components/Nav2";

const Subscription = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        // Here you would integrate payment logic or API call
        setSubscribed(true);
    };

    return (
        <>
            <div>
                <Nav2 />
                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
                    {/* Card 1 */}
                    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "2rem", width: "300px", boxShadow: "0 2px 8px #eee" }}>
                        <h2>Basic</h2>
                        <h3>$5/month</h3>
                        <ul>
                            <li>Access to basic courses</li>
                            <li>Email support</li>
                        </ul>
                        <button onClick={handleSubscribe} disabled={subscribed}>
                            {subscribed ? "Subscribed" : "Subscribe"}
                        </button>
                    </div>
                    {/* Card 2 */}
                    <div style={{ border: "2px solid #007bff", borderRadius: "8px", padding: "2rem", width: "300px", boxShadow: "0 4px 16px #e3eaff", background: "#f7faff" }}>
                        <h2>Pro</h2>
                        <h3>$15/month</h3>
                        <ul>
                            <li>Everything in Basic</li>
                            <li>Access to all courses</li>
                            <li>Priority support</li>
                        </ul>
                        <button onClick={handleSubscribe} disabled={subscribed}>
                            {subscribed ? "Subscribed" : "Subscribe"}
                        </button>
                    </div>
                    {/* Card 3 */}
                    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "2rem", width: "300px", boxShadow: "0 2px 8px #eee" }}>
                        <h2>Premium</h2>
                        <h3>$25/month</h3>
                        <ul>
                            <li>Everything in Pro</li>
                            <li>1-on-1 mentorship</li>
                            <li>Exclusive resources</li>
                        </ul>
                        <button onClick={handleSubscribe} disabled={subscribed}>
                            {subscribed ? "Subscribed" : "Subscribe"}
                        </button>
                    </div>
                </div>
                <div style={{ marginTop: "3rem", textAlign: "center" }}>
                    <h2>Why you should subscribe?</h2>
                    <p>Unlock your full learning potential with unlimited access to premium content, expert support, and exclusive resources designed to help you succeed.</p>
                </div>
            </div>
        </>
    );
};

export default Subscription;