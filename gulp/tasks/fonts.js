import fs from "fs";
import fonter from "gulp-fonter";
import gulpttf2woff2 from "gulp-ttf2woff2";
import { resetFontsStyle } from "./reset.js";

//NOT WORKING!
export const otf2ttf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, { encoding: false })
        .pipe(fonter({
            formats: ["ttf"]
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttf2woff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { encoding: false })
        .pipe(fonter({
            formats: ["woff"]
        }))
        .pipe(app.gulp.dest(app.path.build.fonts));
};

export const ttf2woff2 = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, { encoding: false })
        .pipe(gulpttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts));
};

export const fontsStyle = () => {
    const fontsFile = `${app.path.srcFolder}/style/fonts.scss`;

    fs.readdir(app.path.build.fonts, (err, fontsFiles) => {
        if (fontsFiles) {
            resetFontsStyle();
            fs.writeFile(fontsFile, "", () => { });

            let newFileOnly;
            for (let i = 0; i < fontsFiles.length; i++) {
                const fontFileName = fontsFiles[i].split(".")[0];
                if (newFileOnly !== fontFileName) {
                    let fontName = fontFileName.split("-")[0] ? fontFileName.split("-")[0] : fontFileName;
                    let fontWeight = fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName;

                    switch (fontWeight.toLowerCase()) {
                        case "thin":
                            fontWeight = 100;
                            break;

                        case "extralight":
                            fontWeight = 200;
                            break;

                        case "light":
                            fontWeight = 300;
                            break;

                        case "medium":
                            fontWeight = 500;
                            break;

                        case "semibold":
                            fontWeight = 600;
                            break;

                        case "bold":
                            fontWeight = 700;
                            break;

                        case "extrabold" || "heavy":
                            fontWeight = 800;
                            break;

                        case "black":
                            fontWeight = 900;
                            break;

                        default:
                            fontWeight = 400;
                            break;
                    }

                    fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n\n`, () => { });
                    newFileOnly = fontFileName;
                }
            }
        }
    })

    return app.gulp.src(app.path.srcFolder);
};