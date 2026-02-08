const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'link', (node, index, parent) => {
      if (node.children.length === 1 && node.children[0].type === 'image') {
        const linkUrl = node.url;
        const isYouTube = linkUrl.includes('youtube.com') || linkUrl.includes('youtu.be');
        
        if (isYouTube) {
          let videoId = null;
          try {
             const urlObj = new URL(linkUrl);
             if (urlObj.hostname.includes('youtu.be')) {
                 videoId = urlObj.pathname.slice(1);
             } else {
                 videoId = urlObj.searchParams.get('v');
             }
          } catch (e) {
             // ignore invalid urls
          }

          if (videoId) {
            const imageAlt = node.children[0].alt || '';
            
            const jsxNode = {
              type: 'mdxJsxFlowElement',
              name: 'YouTubeVideo',
              attributes: [
                { type: 'mdxJsxAttribute', name: 'id', value: videoId },
                ...(imageAlt ? [{ type: 'mdxJsxAttribute', name: 'title', value: imageAlt }] : [])
              ],
              children: []
            };
            
            parent.children[index] = jsxNode;
          }
        }
      }
    });
  };
  return transformer;
};

module.exports = plugin;
