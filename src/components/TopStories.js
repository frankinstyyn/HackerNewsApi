import Card from 'react-bootstrap/Card';
import React from "react";
import '../css/App.css'

function HackerNewsPosts({ posts }) {
  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '1rem', fontFamily: 'Sansita Swashed'}}>HackerNews Top 10 Posts</h1>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {posts.map(post => (
          <React.Fragment>
              <div style={{flex: '1 0 300px', boxSizing: 'border-box', margin: '1rem'}}>
              <Card href={post.url} key={post.id}>
                <Card.Body>
                  <Card.Title className='card-title'>{post.title}</Card.Title>
                  <Card.Link className='card-links' href={post.url}>Read Post</Card.Link>
                </Card.Body>
              </Card>
          </div>
            </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HackerNewsPosts;

