const TOKEN_KEY = "museum_token";
const ROLE_KEY = "museum_role";

export function saveAuth(token, role) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ROLE_KEY, role);
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getRole() {
  return localStorage.getItem(ROLE_KEY);
}

export function requireAdminOrRedirect() {
  const role = getRole();
  if (role !== "admin") {
    alert("Admins only.");
    window.location.href = "login.html";
  }
}

export function requireLoginOrRedirect() {
  const token = getToken();
  if (!token) {
    alert("Please log in to view the gallery.");
    window.location.href = "login.html";
  }
}
