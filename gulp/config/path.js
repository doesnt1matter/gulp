import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        scripts: `${buildFolder}/scripts/`,
        html: `${buildFolder}/`,
        img: `${buildFolder}/img/`,
        style: `${buildFolder}/style/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/`,
    },
    src: {
        scripts: `${srcFolder}/scripts/*.js`,
        html: `${srcFolder}/html/*.html`,
        img: `${srcFolder}/img/**/*.*`,
        svg: `${srcFolder}/img/**/*.svg`,
        style: `${srcFolder}/style/**/index.scss`,
        fonts: `${srcFolder}/fonts/*.*`,
        files: `${srcFolder}/(img|style|)/*.*`,
    },
    watch: {
        scripts: `${srcFolder}/scripts/**/*.js`,
        html: `${srcFolder}/html/**/*.html`,
        img: `${srcFolder}/img/**/*.*`,
        svg: `${srcFolder}/img/**/*.svg`,
        style: `${srcFolder}/style/**/*.scss`,
        files: `${srcFolder}/**/*.*`,
    },
    clean: buildFolder,
    rootFolder,
    buildFolder,
    srcFolder
};