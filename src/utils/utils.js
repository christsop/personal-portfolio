import CryptoJS from 'crypto-js';
import emailjs from "emailjs-com";

export let geoData;
export let userAgent;
export let clientData;

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

export const registerStatistics = async (type) => {
    // const baseUrl = 'http://localhost:4000';
    const baseUrl = 'https://my-portfolio-backend-six.vercel.app';
    const { country_name, city, latitude, longitude, userAgent } = clientData;

    // notify user for accessing the website
    // informOwnerWithEmail();
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


export const getGeoDataAndStoreGlobaly = async () => {
    try {
        const res = await fetch("https://geolocation-db.com/json/");
        geoData = await res.json();
        userAgent = encodeURIComponent(navigator.userAgent);
        clientData = {...geoData, userAgent}
    } catch (error) {
        console.error("Failed to fetch geo data:", error);
    }
};