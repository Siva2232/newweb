// src/lib/api.js  (or src/services/api.js)

const API_BASE_URL = 'https://newwebbackends.onrender.com/api';
// Helper to handle response & errors''
const handleResponse = async (res) => {
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMessage = data.error || data.message || "Something went wrong";
    throw new Error(errorMessage);
  }

  return data;
};

// Send Contact Form
export async function sendContactForm(data) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
}

// Send Hire Technician Request
export async function sendHireRequest(data) {
  const res = await fetch(`${API_BASE_URL}/hire`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
}

// Optional: Add more forms later
export async function sendFranchiseInquiry(data) {
  const res = await fetch(`${API_BASE_URL}/franchise`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
}