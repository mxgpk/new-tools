
function login() {
  const cookie = document.getElementById("cookieInput").value;
  if (!cookie.trim()) {
    alert("Please enter Facebook cookie");
    return;
  }

  // Simulate extracting user ID (in real use, you'd fetch it from a backend)
  const fakeUserId = "1234567890";
  document.getElementById("userId").innerText = "Logged in as: " + fakeUserId;
}

function createAd() {
  const title = document.getElementById("cardTitle").value;
  const desc = document.getElementById("description").value;
  const url = document.getElementById("websiteURL").value;
  const link = \`https://facebook.com/adpreview?title=\${encodeURIComponent(title)}&desc=\${encodeURIComponent(desc)}&url=\${encodeURIComponent(url)}\`;
  document.getElementById("adLink").innerHTML = '<p>Preview Link: <a href="' + link + '" target="_blank">' + link + '</a></p>';
}
