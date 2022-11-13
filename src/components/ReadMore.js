import React, {useState} from 'react'



const ReadMore = ({ children }) => {
    


const [readMore, setReadMore] = useState(false)

const toggleText = () => {
    setReadMore(!readMore);
}



  return (
    <p>
        {readMore ? children : children.substr(0, 294) }  
        (<button onClick={toggleText} className="readmore-btn">{ readMore ? 'Read Less' : 'Read More'}</button>)
    </p>
  )
}

export default ReadMore