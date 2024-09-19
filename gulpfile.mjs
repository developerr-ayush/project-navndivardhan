import pkg from "gulp";
const { src, dest, series } = pkg;
import webp from "gulp-sharp-optimize-images";
import clean from "gulp-clean";

function imgTask() {
  return src("img/**/*")
    .pipe(
      webp({
        webp: {
          quality: 80,
          lossless: false,
        },
      })
    )
    .pipe(dest("public/images"));
}
function filterImg() {
  return src("public/images/**/**.+(webp|svg)").pipe(dest("public/img"));
}
export const compressImage = series(imgTask, filterImg);
export default series(compressImage);
