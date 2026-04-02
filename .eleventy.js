const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // ✅ 정적 자산 복사
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/image_city");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");

  // ✅ Markdown 안에서 HTML 허용
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.setLibrary("md", md);

  // ✅ Seoul 글 컬렉션
  eleventyConfig.addCollection("seoulPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/seoul_spot/*.md").reverse();
  });

  // ✅ Tokyo 글 컬렉션
  eleventyConfig.addCollection("tokyoPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/tokyo_spot/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk"
  };
};

