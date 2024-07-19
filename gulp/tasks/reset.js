import { deleteAsync } from "del"

export const reset = () => {
    return deleteAsync(app.path.clean);
};

export const resetImg = () => {
    return deleteAsync(app.path.build.img);
}

export const resetStyle = () => {
    return deleteAsync(app.path.build.style);
}

export const resetScripts = () => {
    return deleteAsync(app.path.build.scripts);
}

export const resetFontsStyle = () => {
    return deleteAsync(`${app.path.src}/fonts/fonts.scss`);
}