import CryptoJS from 'crypto-js';
import emailjs from "emailjs-com";

const informOwnerWithEmail = () => {
    emailjs
        .send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID_INFORM_OWNER,
            {name: 'visited'},
            process.env.EMAILJS_USER_ID
        )
        .then(
        (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
    );
}

export const registerStatistics = async (baseUrl, data, type) => {
    const { country_name, city, latitude, longitude, userAgent } = data;

    // notify user for accessing the website outside of greece
    country_name !== 'Greece' && informOwnerWithEmail();
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