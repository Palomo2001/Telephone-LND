import React, { useEffect, useState } from 'react';

function MyPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/RSS.xml')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'text/xml');
        const items = xml.getElementsByTagName('item');
        const itemList = Array.from(items).map(item => ({
          title: item.getElementsByTagName('title')[0].textContent,
          link: item.getElementsByTagName('link')[0].textContent,
          description: item.getElementsByTagName('description')[0].textContent,
          pubDate: item.getElementsByTagName('pubDate')[0].textContent,
        }));
        setItems(itemList);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>My Page</h1>
      <ul>
        {items.map(item => (
          <li key={item.link}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPage;
