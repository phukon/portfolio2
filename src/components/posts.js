import React, { useState, useEffect} from 'react'
import sanityClient from '../client'

const posts = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == 'post']{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`)
      .then((data) => setPost(data))
      .catch(console.error);
  }, [])
}

export default posts