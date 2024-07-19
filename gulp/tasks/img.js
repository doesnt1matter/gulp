import imagemin from "gulp-imagemin";
import webp from "gulp-webp"

export const img = () => {
    return app.gulp.src(app.path.src.img, { encoding: false })
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(webp())
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interplaced: true,
            optimizationLevel: 0
        }))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browserSync.stream());
};

export const svg = () => {
    return app.gulp.src(app.path.src.svg)
        .pipe(app.gulp.dest(app.path.build.img))
}