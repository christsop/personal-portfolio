import React, { useEffect, useState } from "react";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [sortBy, setSortBy] = useState("time"); // 'time' or 'location'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://my-portfolio-backend-six.vercel.app/getEvents")
            .then((res) => res.json())
            .then((data) => {
                setEvents(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch events:", err);
                setLoading(false);
            });
    }, []);

    const sortedEvents = [...events].sort((a, b) => {
        if (sortBy === "location") {
            const locA = `${a.country_name || "Unknown"} ${a.city || ""}`;
            const locB = `${b.country_name || "Unknown"} ${b.city || ""}`;
            return locA.localeCompare(locB);
        } else {
            return new Date(a.time) - new Date(b.time);
        }
    });

    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleString();
    };

    return (
        <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
            <h2>Event List</h2>

            <div style={{ marginBottom: "1rem" }}>
                <label>Sort by: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="time">Time</option>
                    <option value="location">Location</option>
                </select>
            </div>

            {loading ? (
                <p>Loading events...</p>
            ) : (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {sortedEvents.map((event) => (
                        <li
                            key={event.id}
                            style={{
                                border: "1px solid #ccc",
                                padding: "0.75rem",
                                marginBottom: "0.5rem",
                                borderRadius: "5px",
                            }}
                        >
                            <strong>
                                {event.country_name || "Unknown"}
                                {event.city ? `, ${event.city}` : ""}
                            </strong>
                            <br />
                            <span>{formatDate(event.time)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
