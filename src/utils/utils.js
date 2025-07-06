import CryptoJS from 'crypto-js';

export const registerStatistics = async (baseUrl, data, type) => {
    const { country_name, city, latitude, longitude, userAgent } = data;

    const payload = {
        country_name,
        city,
        latitude,
        longitude,
        type,
        time: new Date(),
        userAgent
    };

    // 1. Serialize
    const jsonString = JSON.stringify(payload);

    // 2. Encrypt
    const encrypted = CryptoJS.AES.encrypt(jsonString, process.env.ENCRYPTION_KEY).toString();

    // 3. Encode & send
    try {
        await fetch(`${baseUrl}/register-statistics?payload=${encodeURIComponent(encrypted)}`);
    } catch (error) {
        console.error("registerStatistics failed", error);
    }
};


export const getGeoData = async () => {
    try {
        const res = await fetch("https://geolocation-db.com/json/");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch geo data:", error);
        return null;
    }
};