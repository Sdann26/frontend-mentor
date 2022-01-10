/* Libraries */
const {src, dest, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-purgecss');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

/* Private Functions */
const style = () => {
    return src('./css/*.sass') 
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(sourcemaps.write())
        .pipe(dest('./css'))
        .pipe(browserSync.stream());
};

const watchTasks = () => {
    browserSync.init({
        server: "./"
    });
    watch('./css/*.sass', style);
    watch('./*.html').on('change', browserSync.reload);
}

/* Public Functions */
const clean = ()=>{
    return src('./css/*.css')
        .pipe(cleanCss({
            content: ['./*.html']
        }))
        .pipe(dest('./css'))
}

/* Exports */
exports.clean = clean;
exports.default = series(style, watchTasks);