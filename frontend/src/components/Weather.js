import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await axios.get(
        `http://localhost:5000/api/weather/${city}`
      );
      setData(res.data);
    } catch (err) {
      alert("City not found");
    }
  };

  // --- Simple Styles ---
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      textAlign: "center",
      borderRadius: "15px",
      background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
      color: "white",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
    title: {
      marginBottom: "20px",
      fontWeight: "300",
      fontSize: "2rem",
    },
    input: {
      padding: "12px",
      width: "70%",
      border: "none",
      borderRadius: "25px 0 0 25px",
      outline: "none",
      fontSize: "1rem",
    },
    button: {
      padding: "12px 15px",
      border: "none",
      borderRadius: "0 25px 25px 0",
      backgroundColor: "#333",
      color: "white",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background 0.3s",
    },
    resultCard: {
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      backdropFilter: "blur(5px)",
    },
    temp: {
      fontSize: "3rem",
      margin: "10px 0",
      fontWeight: "bold",
    },
    condition: {
      textTransform: "capitalize",
      letterSpacing: "1px",
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Weather App</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Enter City"
          style={styles.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button style={styles.button} onClick={fetchWeather}>
          Search
        </button>
      </div>

      {data && (
        <div style={styles.resultCard}>
          <h3 style={{ margin: "0", fontSize: "1.5rem" }}>{data.city}</h3>
          <p style={styles.temp}>{data.temperature}°C</p>
          <p style={styles.condition}>{data.weather}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;