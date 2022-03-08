import React from 'react';
import HackerNewsPosts from './components/TopStories'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    async function getTopStories() {
      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 10)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, []);

  return (
    <div className="App">
      <HackerNewsPosts posts={posts} />
    </div>
  );
}

export default App;