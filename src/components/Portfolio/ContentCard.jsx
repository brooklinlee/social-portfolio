const ContentCard = ({ content, caption, purpose, equipment }) => {
  return (  
    <div className="content-card">
      <div className="content">{ content }</div>
      <div className="info">
        <p>{ caption }</p>
        <p>{ purpose }</p>
        <p>{ equipment }</p>
      </div>
    </div>
  )
}

export default ContentCard