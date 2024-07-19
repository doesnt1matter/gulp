import gulp from "gulp";

import { path } from "./gulp/config/path.js";

import { img, svg } from "./gulp/tasks/img.js";
import { server } from "./gulp/tasks/server.js";
import { reset } from "./gulp/tasks/reset.js";
import { watch } from "./gulp/tasks/watch.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { javascript } from "./gulp/tasks/javascript.js";
import plugins from "./gulp/config/plugins.js";
import { fontsStyle, otf2ttf, ttf2woff, ttf2woff2 } from "./gulp/tasks/fonts.js";

global.app = { gulp, path, plugins };

const copy = gulp.parallel(img, svg, scss, javascript);
const fonts = gulp.series(ttf2woff, ttf2woff2, fontsStyle);
const mainTasks = gulp.series(fonts, copy, html);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watch, server));

gulp.task("default", dev);