import * as dartSass from 'sass'
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries';
import gulpWebpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import GulpCleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const scss = () => {
    const replacePattern = /(\.\.\/)+img\//g;

    return app.gulp.src(app.path.src.style, { sourcemaps: true })
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(app.plugins.replace(replacePattern, '../img/'))
        .pipe(gulpGroupCssMediaQueries())
        .pipe(gulpWebpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        //.pipe(GulpCleanCss())
        .pipe(rename({ extname: ".min.css" }))
        .pipe(app.gulp.dest(app.path.build.style))
        .pipe(app.plugins.browserSync.stream());
};