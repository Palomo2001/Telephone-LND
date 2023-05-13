import { useEffect } from 'react';
import rss from "../../services/RSS.xml";
import { FaRegEdit } from 'react-icons/fa';

export default function RSSCompnets() {

  <a href="/services/RSS.xml" type="application/rss+xml">Subscribe to RSS Feed</a>
  useEffect(() => {
    /* later within the component */
    window.open(rss, '_self');
  })
}
