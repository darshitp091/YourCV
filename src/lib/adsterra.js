/**
 * Adsterra Publisher API Utility
 * Used for fetching statistics and managing placements.
 * API Key: 73b6b292ed780e89f620ff15c77b7ef0
 */

const API_BASE_URL = "https://api3.adsterra.com/publisher";
const API_KEY = process.env.ADSTERRA_API_KEY || "73b6b292ed780e89f620ff15c77b7ef0";

export const fetchAdsterraStats = async (startDate, endDate) => {
    try {
        const response = await fetch(`${API_BASE_URL}/stats.php?start_date=${startDate}&end_date=${endDate}`, {
            headers: {
                "X-API-Key": API_KEY
            }
        });

        if (!response.ok) throw new Error("Failed to fetch Adsterra stats");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Adsterra API Error:", error);
        return null;
    }
};

export const getPlacementStatus = async (placementId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/placements.php`, {
            headers: {
                "X-API-Key": API_KEY
            }
        });

        if (!response.ok) throw new Error("Failed to fetch placements");

        const data = await response.json();
        return data.find(p => p.id === placementId) || null;
    } catch (error) {
        console.error("Adsterra Placement Error:", error);
        return null;
    }
};
