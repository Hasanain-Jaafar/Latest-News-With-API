# 📰 Latest News App

A simple and modern web app that fetches and displays the latest headlines using the NewsAPI.<br> Built with vanilla HTML, CSS, and JavaScript — no frameworks required.

## 📸 Features

- Fetches top headlines from [NewsAPI.org](https://newsapi.org/).
- Displays article title, image, source, author, and publication date
- Responsive layout using CSS Grid & Flexbox
- Clean and minimal design
- Recent headlines listed in a sticky sidebar

---

## 📦 Technologies Used

- HTML5
- CSS3 (with Normalize.css)
- JavaScript (Vanilla ES6)
- [NewsAPI.org](https://newsapi.org/) (for fetching news)

---

## 🧰 How to Use

1. Clone the repo:

   ```bash
   git clone https://github.com/Hasanain-Jaafar/Latest-News-With-API.git
   cd latest-news-app
   ```

2. Open `index.html` directly in your browser  
   _or_  
   Use a local server like Live Server in VS Code.

3. **Get your free API key**

   - Go to [https://newsapi.org](https://newsapi.org)
   - Sign up for a free account
   - Copy your API key

4. In your `main.js` file (if using direct API access), replace the placeholder with your actual API key:
   ```js
   const apiKey = "your_actual_api_key_here";
   ```

---

## 📁 Project Structure

```
/
├── index.html          # Main HTML page
├── main.js             # App logic to fetch & display news
├── css/
│   ├── normalize.css   # CSS reset for consistency
│   └── style.css       # Custom styling
├── assets/             # Favicon, images
```

---

## 🔐 API Used

- [NewsAPI.org](https://newsapi.org/) – Free API to get breaking news headlines and articles.
- ✅ Requires a free account and API key.

---

## ⚠️ Note

This version uses direct API calls. For production usage, you should route requests through a secure backend to protect your API key and avoid CORS issues.

---

## 📄 License

MIT © 2025 Your Name
