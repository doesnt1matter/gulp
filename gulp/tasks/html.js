import fileInclude from "gulp-file-include";
import gulpWebpHtmlNosvg from "gulp-webp-html-nosvg";
import { restart } from "./server.js";

export const html = () => {
    const replacePattern = /(\.\.\/)+img\//g;

    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude())
        .pipe(app.plugins.replace(replacePattern, './img/'))
        .pipe(gulpWebpHtmlNosvg())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
};