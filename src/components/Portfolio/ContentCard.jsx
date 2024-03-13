import './ContentCard.css'

const ContentCard = ({ content, caption, purpose, equipment }) => {
  return (  
    <div className="content-card">
      <div className="content">{ content }</div>
      <div className="info">
        { caption }
        <p><strong>Purpose:</strong> { purpose }</p>
        <p><strong>Equipment Used:</strong> { equipment }</p>
      </div>
    </div>
  )
}

export default ContentCard