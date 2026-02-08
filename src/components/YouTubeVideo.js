import React from 'react';

export default function YouTubeVideo({ id, title }) {
  if (!id) {
    return null;
  }

  return (
    <div className="video-container" style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginBottom: '1.5rem'}}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title || 'YouTube video player'}
        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}
