exports.handler = async function (event, context) {
    const apiKey = process.env.NEWS_API_KEY;
    const country = event.queryStringParameters.country || "us";
    const pageSize = event.queryStringParameters.pageSize || 10;
  
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=${pageSize}`;
  
    try {
      const res = await fetch(url); // native fetch now supported on Netlify
      const data = await res.json();
  
      return {
        statusCode: res.status,
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };
  