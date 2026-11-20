const fs = require("fs");
const JavaScriptObfuscator = require("javascript-obfuscator");
const { minify } = require("html-minifier-terser");
const CleanCSS = require("clean-css");

async function build() {

    if (!fs.existsSync("dist")) {
        fs.mkdirSync("dist");
    }

    // HTML
    const html = fs.readFileSync("index.html", "utf8");

    const minifiedHTML = await minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true
    });

    fs.writeFileSync("dist/index.html", minifiedHTML);

    // CSS
    const css = fs.readFileSync("style.css", "utf8");

    const minifiedCSS = new CleanCSS({
        level: 2
    }).minify(css).styles;

    fs.writeFileSync("dist/style.css", minifiedCSS);

    // JS
    const js = fs.readFileSync("script.js", "utf8");

    const obfuscatedJS = JavaScriptObfuscator.obfuscate(js, {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        selfDefending: true,
        stringArrayEncoding: ["base64"]
    }).getObfuscatedCode();

    fs.writeFileSync("dist/script.js", obfuscatedJS);

    console.log("Todo ofuscado.");
}

build();