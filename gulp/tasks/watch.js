import gulp from "gulp";
import { img, svg } from "./img.js";
import { html } from "./html.js";
import { scss } from "./scss.js";
import { javascript } from "./javascript.js";

import { reset, resetImg, resetScripts, resetStyle } from "./reset.js";
import { restart } from "./server.js";

export function watch() {
    gulp.watch(app.path.watch.img, gulp.series(resetImg, img, svg));
    gulp.watch(app.path.watch.scripts, gulp.series(resetScripts, javascript));
    gulp.watch(app.path.watch.style, gulp.series(resetStyle, scss));
    gulp.watch(app.path.watch.html, gulp.series(html));
};