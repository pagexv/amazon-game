module.exports = function(eleventyConfig) {
    // Copy assets
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.setNunjucksEnvironmentOptions({
        throwOnUndefined: true,
        autoescape: false,
    });

    // Blog collection
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("src/blog/*.md");
    });
    eleventyConfig.addGlobalData("ads", require("./src/_data/ads"));

    return {
      pathPrefix: "/amazon-game/", // For GitHub Pages subdirectory
        dir: {
          input: "src",
          includes: "_includes", // Explicitly set includes directory
          output: "_site"
        },
        markdownTemplateEngine: "njk"
      };
};