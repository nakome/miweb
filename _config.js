import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import terser from "lume/plugins/terser.ts";
import postcss from "lume/plugins/postcss.ts";
import nano from "npm:cssnano";
import basePath from "lume/plugins/base_path.ts";
import svgo from "lume/plugins/svgo.ts";
import inline from "lume/plugins/inline.ts";
import sitemap from "lume/plugins/sitemap.ts";
import favicon from "lume/plugins/favicon.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";



const site = lume({
    src: "./src",
    dest: "./public",
    prettyUrls: false,
    location: new URL("https://monchovarela.es"),
});

site.use(minifyHTML());
site.use(basePath());

site.use(postcss());
site.hooks.addPostcssPlugin(nano);

site.use(svgo());
site.use(inline());
site.use(sitemap());
site.use(resolveUrls());

site.use(terser({
    options: {
        module: false,
    },
}));

site.copy('assets/icons');

site.use(picture(/* Options */));
site.use(transformImages());

site.use(favicon({
    input: "assets/icons/logo.svg",
}));

site.ignore("README.md");

export default site;