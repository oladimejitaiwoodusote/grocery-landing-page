import '../styles/Services.css'


function Services() {
  return (
    <div className='Services'>
        <div className='Services_Top'>
        <span>
            The <span className="highlight-text">Bulk</span> Services We
        </span>
            <span>Provide For You</span>
        </div>
        <div className='Services_Middle'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec
              onare velit cursus sed. Cras in consectur arcu, et auctor mi. Sed purus orci, sodales
              non metus vel, cursus bibendum turpis. Nam sit amet congue orci purus orci, sodales non
            </p>
        </div>
        <div className='Services_Bottom'>
        {[
          ['Freshness', 'Guaranteed'],
          ['Personalized', 'Shopping'],
          ['Professional', 'Courier'],
          ['Best Service', 'and Licensed']
        ].map(([top, bottom], index) => (
            <div className={`Service_Card ${index === 0 ? 'highlight-card' : ''}`} key={index}>
            <div className='Service_Card_Header'>
              <span>{top}</span>
              <span>{bottom}</span>
            </div>
            <div className='Service_Card_Body'>
              <p>
                Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.
              </p>
            </div>
          </div>
            ))}
        </div>
    </div>
  )
}

export default Services