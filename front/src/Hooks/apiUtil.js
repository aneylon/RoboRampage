export function handleError(error) {
  console.error("API call failed.", error);
  throw error;
}

export async function handleResponse(response) {
  if (response.ok && response.status !== 204) {
    if (response.url.includes("revoke")) {
      return;
    } else {
      return response.json();
    }
  }
  if ([204, 404].includes(response.status)) {
    return [];
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  if ([401, 403].includes(response.status)) {
    // expire user sesson
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not OK.");
}
