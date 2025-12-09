const BACKEND_URL = "https://your-render-url.onrender.com";  // CHANGE THIS


// -------- WEBSITE GENERATOR ----------
async function generateWebsite() {
  const prompt = document.getElementById("websitePrompt").value;
  const zipname = document.getElementById("zipname").value;

  const res = await fetch(BACKEND_URL + "/api/generate-website", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, zipname })
  });

  const data = await res.json();
  alert("Website ZIP ready: " + data.url);
}


// -------- IMAGE GENERATOR ----------
async function generateImage() {
  const prompt = document.getElementById("imagePrompt").value;
  const file = document.getElementById("photo").files[0];

  let formData = new FormData();
  formData.append("prompt", prompt);
  formData.append("file", file);

  const res = await fetch(BACKEND_URL + "/api/generate-image", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  document.getElementById("outputImg").src = data.url;
    }
