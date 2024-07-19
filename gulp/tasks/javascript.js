import webpack from "webpack-stream"

export const javascript = () => {
    return app.gulp.src(app.path.src.scripts, { sourcemap: true })
        .pipe(webpack({
            mode: "development",
            output: {
                filename: "app.min.js"
            }
        }))
        .pipe(app.gulp.dest(app.path.build.scripts))
        .pipe(app.plugins.browserSync.stream());
};