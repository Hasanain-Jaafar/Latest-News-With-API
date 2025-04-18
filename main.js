const apiKey = "50bcfb64b104453d865b22510aa2bc26";
const pageSize = 10;
// >======= *** DISPLAY NEWS *** ====>>
function displayNews(articles) {
  const newsList = document.querySelector(".news-list");
  const asideList = document.querySelector(".aside");
  newsList.innerHTML = "";
  articles.forEach((article) => {
    const listItem = document.createElement("li");
    const asideItem = document.createElement("li");
    // >========>>
    function limitTextLength(text, maxLength) {
      let processedText = text.trim();
      if (processedText.length <= maxLength) {
        return processedText;
      }
      const ellipsis = "...";
      const actualMaxLength = maxLength - ellipsis.length;
      let limitedText = processedText.slice(0, actualMaxLength);
      const lastSpaceIndex = limitedText.lastIndexOf(" ");
      if (lastSpaceIndex !== -1) {
        limitedText = limitedText.slice(0, lastSpaceIndex);
      }
      return limitedText + ellipsis;
    }
    // >========>>

    listItem.innerHTML = `    
    <div class="article-img">
      <img src = "${article.urlToImage || "./assets/missing-img.jpg"}" alt="${
      article.urlToImage || "Image Note found"
    }" >
    </div>
    <a class="title" href="${article.url}" target="_blank"> ${article.title}</a>
    <p class="description">${article.description || "No description"}</p>
    <div class="source" >
    <span>[Source]</span>
    ${article.source.name} 
    </div>
    <div class="info">
      <div class="author">
      <span>Author</span>${article.author || "Unknown"}
      </div>
      <div class="published-at">${new Date(
        article.publishedAt
      ).toDateString()}</div>
    </div>
    
    `;
    const shortenTitle = limitTextLength(article.title, 32);
    asideItem.innerHTML = `
    ➡️ <a href="${article.url}">${shortenTitle}</a>
    <div class="recent-date">${new Date(
      article.publishedAt
    ).toDateString()}</div>
    `;
    newsList.appendChild(listItem);
    asideList.appendChild(asideItem);
  });
}
// >=====>>
function showError(message) {
  const newsList = document.querySelector(".news-list");
  newsList.innerHTML = `<li style="color:red; padding: 1rem">${message}</li>`;
}

// >======= *** FETCH NEWS FROM API *** ====>>
function fetchNews() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=${pageSize}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayNews(data.articles);
    })
    .catch((err) => {
      console.error("Proxy error:", err);
      showError("Failed to load news");
    });
  
}

window.onload = fetchNews;
