export default async function fetchFire() {
  let fireData;
  try {
    await fetch(import.meta.env.VITE_WORLD_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network connection problem");
        }
        return (fireData = response.data);
      })
      .catch((error) => {
        throw new Error("Error fetching fire data", error);
      });
  } catch (error) {
    throw new Error("Error fetching fire data", error);
  }
}
