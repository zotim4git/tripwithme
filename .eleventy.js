module.exports = function(eleventyConfig) {
  // ✅ 정적 자산 복사 설정
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/image_city");
  eleventyConfig.addPassthroughCopy("src/admin"); // ✅ 이거 추가!

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk"
  };
};


