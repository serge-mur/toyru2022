var path = {
    build: {
        html: 'assets/build/',
        js: 'assets/build/js/',
        css: 'assets/build/css/',
        img: 'assets/build/img/',
        fonts: 'assets/build/fonts/'
    },
    src: {
        html: 'assets/src/*.html',
        js: 'assets/src/js/script.js',
        style: 'assets/src/style/style.scss',
        img: 'assets/src/img/**/*.*',
        fonts: 'assets/src/fonts/**/*.*'
    },
    watch: {
        html: 'assets/src/**/*.html',
        js: 'assets/src/js/**/*.js',
        css: 'assets/src/style/**/*.scss',
        img: 'assets/src/img/**/*.*',
        fonts: 'assets/srs/fonts/**/*.*'
    },
    clean: './assets/build/*'
};

var config = {
    server: './assets/build',
    notify: true
};

var gulp = require('gulp'), // include Gulp
    webserver = require('browser-sync'), // server for work and automatic page updates
    plumber = require('gulp-plumber'), // bug tracking module
    fileinclude = require('gulp-file-include'), // a module to import the contents of one file into another
    sourcemaps = require('gulp-sourcemaps'), // module for generating a map of source files
    sass = require('gulp-sass'), // module for compiling SASS (SCSS) to CSS
    autoprefixer = require('gulp-autoprefixer'), // module for automatic installation of auto-prefixes
    cleanCSS = require('gulp-clean-css'), // CSS minification plugin
    uglify = require('gulp-uglify'), // JavaScript minification module
    cache = require('gulp-cache'), // module for caching
    imagemin = require('gulp-imagemin'), // plugin for compressing PNG, JPEG, GIF and SVG images
    jpegrecompress = require('imagemin-jpeg-recompress'), // jpeg compression plugin
    svgSprite = require('gulp-svg-sprite'),
    pngquant = require('imagemin-pngquant'), // png compression plugin
    del = require('del'), // plugin for deleting files and directories
    rename = require('gulp-rename');

/* tasks */

// start the server
gulp.task('webserver', function() {
    webserver(config);
});

// compile html
gulp.task('html:build', function() {
    return gulp.src(path.src.html) // selection of all html files in the specified path
        .pipe(plumber()) // error tracking
        .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
        .pipe(gulp.dest(path.build.html)) // uploading ready files
        .pipe(webserver.reload({ stream: true })); // server reboot
});

// compile styles
gulp.task('css:build', function() {
    return gulp.src(path.src.style) // get style.scss
        .pipe(plumber()) // for bug tracking
        .pipe(sourcemaps.init()) // initialize sourcemap
        .pipe(sass({ outputStyle: 'expanded' })) // scss -> css
        .pipe(autoprefixer({ cascade: false })) // add prefix
        .pipe(gulp.dest(path.build.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // minimize CSS
        .pipe(sourcemaps.write('./')) // write sourcemap
        .pipe(gulp.dest(path.build.css)) // output to build
        .pipe(webserver.reload({ stream: true })); // server restart
});

// move bootstrap js
gulp.task('vendor_js:build', function() {
    return gulp.src('assets/src/js/vendor/**/*.*')
        .pipe(gulp.dest(path.build.js));
});

// compile js
gulp.task('js:build', function() {
    return gulp.src(path.src.js) // get file script.js
        .pipe(plumber()) // for bug tracking
        .pipe(gulp.dest(path.build.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.init()) //initialize sourcemap
        .pipe(uglify()) // minimize js
        .pipe(sourcemaps.write('./')) //  write sourcemap
        .pipe(gulp.dest(path.build.js)) // put ready file
        .pipe(webserver.reload({ stream: true })); // server restart
});

// move fonts
gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

// image processing
gulp.task('image:build', function() {
    return gulp.src(path.src.img) // path to image source
        .pipe(cache(imagemin([ // image compression
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
        .pipe(gulp.dest(path.build.img)); // output ready files
});

/*
gulp.task('svg-sprite', function() {
    return gulp.src('assets/src/img/icons/*.svg') // svg files for sprite
        .pipe(svgSprite({
            shape: {
                dimension: {
                    maxWidth: 500,
                    maxHeight: 500
                },
                spacing: {
                    padding: 0
                },
                transform: [{
                    "svgo": {
                        "plugins": [
                            { removeViewBox: false },
                            { removeUnusedNS: false },
                            { removeUselessStrokeAndFill: false },
                            { cleanupIDs: false },
                            { removeComments: true },
                            { removeEmptyAttrs: true },
                            { removeEmptyText: true },
                            { collapseGroups: true },
                            { removeAttrs: { attrs: '(fill|stroke|style)' } }
                        ]
                    }
                }]
            },
            mode: {
                stack: {
                    dest: '.',
                    sprite: 'sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest('assets/build/img/'));
});
*/

// remove catalog build
gulp.task('clean:build', function() {
    return del(path.clean);
});

// clear cache
gulp.task('cache:clear', function() {
    cache.clearAll();
});

// assembly
gulp.task('build',
    gulp.series('clean:build',
        gulp.parallel(
            'html:build',
            'css:build',
            'vendor_js:build',
            'js:build',
            'fonts:build',
            // 'svg-sprite',
            'image:build'
        )
    )
);

// launching tasks when files change
gulp.task('watch', function() {
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

// default tasks
gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver', 'watch')
));