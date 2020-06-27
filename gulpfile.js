const config = require('./config');
const browser = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const github = require('gulp-gh-pages');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');



function css(done) {

    return del([

        config.css.dest

    ]).then(function() {

        return gulp

        .src(config.css.src + '/' + config.css.main)

        .pipe(sass({

            outputStyle: 'compressed'

        }))

        .pipe(cssnano({

            autoprefixer: {

                add: true,
                browsers: ['last 4 versions']

            }

        }))

        .pipe(gulp.dest(config.css.dest));

        done();

    });

}



function js(done) {

    return del([

        config.js.dest

    ]).then(function() {

        return gulp

        .src(config.js.src + '/' + config.js.main)

        .pipe(webpack({

            entry: {

                main: './' + config.js.src + '/' + config.js.main

            },
            externals: {

                'jquery': 'jQuery'

            },
            mode: 'production',
            module: {

                rules: [{

                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {

                        presets: ['env']

                    },
                    test: /\.js?$/

                }]

            },
            node: {

                fs: 'empty'

            },
            output: {

                filename: config.js.main

            },
            performance: {

                hints: false

            }

        }))

        .pipe(uglify())

        .pipe(gulp.dest(config.js.dest));

        done();

    });

}



function img(done) {

    return del([

        config.img.dest

    ]).then(function() {

        return gulp

        .src([

            config.img.src + '/**',
            '!' + config.img.src

        ])

        .pipe(imagemin([

            imagemin.mozjpeg({

                progressive: true

            }),

            imagemin.optipng({

                optimizationLevel: 5

            })

        ], {

            verbose: true

        }))

        .pipe(gulp.dest(config.img.dest));

        done();

    });

}



function svg(done) {

    return del([

        config.svg.dest

    ]).then(function() {

        return gulp

        .src([

            config.svg.src + '/**/*.svg',
            '!' + config.svg.src

        ])

        .pipe(imagemin([

        	imagemin.svgo({

        		plugins: [{

                    removeViewBox: false

                }]
        	})

        ], {

        	verbose: true

        }))

        .pipe(gulp.dest(config.svg.dest));

        done();

    });

}



function font(done) {

    return del([

        config.font.dest

    ]).then(function() {

        return gulp

        .src([

            config.font.src + '/**',
            '!' + config.font.src

        ])

        .pipe(gulp.dest(config.font.dest));

    });

}



function html(done) {

    return del([

        config.html.dest + '/*.html'

    ]).then(function() {

        return gulp

        .src(config.html.src + '/*.html')

        .pipe(gulp.dest(config.html.dest));

        done();

    });

}



function reload(done) {

    browser.reload();

    done();

}



function serve() {

    browser.init({

        proxy: config.url

    });

}



function watch() {

    gulp.watch(config.css.src + '/**/*.scss', gulp.series(css, reload));
    gulp.watch(config.js.src + '/**/*.js', gulp.series(js, reload));
    gulp.watch(config.img.src + '/**', gulp.series(img, reload));
    gulp.watch(config.svg.src + '/**', gulp.series(svg, reload));
    gulp.watch(config.font.src + '/**', gulp.series(font, reload));
    gulp.watch(config.html.src + '/**/*.html', gulp.series(html, reload));

}



gulp.task('default', gulp.series(css, js, img, svg, font, html, gulp.parallel(serve, watch)));



gulp.task('deploy', function() {

    return gulp

    .src([

        './build/**/*',
        'CNAME'

    ])

    .pipe(github());

});
