// api/universities.js

export default async function handler(req, res) {
  const { name, country, limit, offset } = req.query;

  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (country) params.append("country", country);
  if (limit) params.append("limit", limit);
  if (offset) params.append("offset", offset);

  try {
    const response = await fetch(
      `http://universities.hipolabs.com/search?${params.toString()}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Failed to fetch universities" });
  }
}
