const API_URL = "http://localhost:5000/api";

export async function getNotifications() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/notifications`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.json();
}

export async function markNotificationRead(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/notifications/${id}/read`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.json();
}