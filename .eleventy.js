module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('styles');
  eleventyConfig.addPassthroughCopy('scripts');
  return {
    passthroughFileCopy: true
  }
}
