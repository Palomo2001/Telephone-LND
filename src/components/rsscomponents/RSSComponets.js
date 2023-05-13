import { useEffect } from 'react';
import rss from "../../services/RSS.xml";
import { FaRegEdit } from 'react-icons/fa';

export default function RSSCompnets() {

  <FaRegEdit className="Click-RSS" onClick={() => RSSCompnets()}/>
  useEffect(() => {
    /* later within the component */
    window.open(rss, '_self');
  })
}
