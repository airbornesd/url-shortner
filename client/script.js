document
  .getElementById('shorten-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const longUrl = document.getElementById('long-url').value;

    try {
      const response = await fetch('http://localhost:9000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      if (response.ok) {
        const { shortUrl } = await response.json();

        const shortUrlContainer = document.getElementById(
          'short-url-container'
        );
        shortUrlContainer.innerHTML = `Short URL: <a href="http://localhost:9000/${shortUrl}" target="_blank">http://localhost:9000/${shortUrl}</a>`;
      } else {
        alert('Error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  });
