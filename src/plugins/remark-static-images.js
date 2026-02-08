const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    visit(ast, 'image', (node) => {
      // If the image points to /static/..., remove the /static prefix
      // GitHub needs /static/ to find the file, but Docusaurus serves it from root /
      if (node.url && node.url.startsWith('/static/')) {
        node.url = node.url.replace(/^\/static\//, '/');
      }
    });
  };
  return transformer;
};

module.exports = plugin;
