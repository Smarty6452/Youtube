document.addEventListener("DOMContentLoaded", function() {
    const feedList = document.getElementById('feed-list');
    const feedDetails = document.getElementById('feed-details');
  
    // Function to fetch RSS feeds from an API
    async function fetchFeeds() {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
        const data = await response.json();
        return data.items;
      } catch (error) {
        console.error('Error fetching feeds:', error);
      }
    }
  
    // Function to display the list of feeds
    function displayFeedList(feeds) {
      feedList.innerHTML = '';
      feeds.forEach((feed, index) => {
        const li = document.createElement('li');
        li.textContent = feed.title;
        li.dataset.index = index; // Store the index of the feed in dataset
        feedList.appendChild(li);
      });
    }
  
    // Function to display the details of a selected feed
    function displayFeedDetails(feed) {
      feedDetails.innerHTML = `
        <h2>${feed.title}</h2>
        <p>${feed.description}</p>
        <a href="${feed.link}" target="_blank">Read more</a>
      `;
    }
  
    // Event listener for clicking on a feed in the list
    feedList.addEventListener('click', async (event) => {
      if (event.target.tagName === 'LI') {
        const index = event.target.dataset.index;
        const feeds = await fetchFeeds();
        displayFeedDetails(feeds[index]);
      }
    });
  
    // Initial fetch and display of feeds
    (async function() {
      const feeds = await fetchFeeds();
      displayFeedList(feeds);
      displayFeedDetails(feeds[0]); // Display the details of the first feed initially
    })();
  });
  