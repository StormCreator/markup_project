const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const fontName = 'icons';



gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/styles/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/styles/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function() {
	return gulp.src('src/*.html')
		.pipe(htmlmin({collapseWhitespace: true }))
		.pipe(gulp.dest('dist/'))
});

gulp.task('scripts', function() {
	return gulp.src(['src/js/*.js', '!src/js/script.js'])
		.pipe(gulp.dest('dist/js'))
});

gulp.task('fonts', function() {
	return gulp.src('src/assets/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('icons', function() {
	return gulp.src('src/assets/icons/**/*')
		.pipe(gulp.dest('dist/icons'))
});



gulp.task('images', function() {
	return gulp.src('src/assets/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task( 'iconfont', async () => {
    gulp.src( 'src/assets/icons/*.svg' )
        .pipe( iconfontCss( {
            // где будет наш scss файл
            targetPath   : '../../../styles/base/_icons.scss', 
            // пути подлючения шрифтов в _icons.scss
            fontPath     : '../../fonts/iconFont/',
            fontName    : fontName

        } ) )
        .pipe( iconfont( {
            fontName    : fontName,
            formats     : [ 'svg', 'ttf', 'eot', 'woff', 'woff2' ],
            normalize   : true,
            fontHeight  : 1001
        } ) )
        .pipe( gulp.dest( 'src/assets/fonts/iconFont/' ) )
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images', 'iconfont'));





// gulp.task('server', function() {

//     browserSync({
//         server: {
//             baseDir: "dist"
//         }
//     });

//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// gulp.task('styles', function() {
//     return gulp.src("src/styles/**/*.+(scss|sass)")
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(rename({suffix: '.min', prefix: ''}))
//         .pipe(autoprefixer())
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest("dist/css"))
//         .pipe(browserSync.stream());
// });

// gulp.task('watch', function() {
//     gulp.watch("src/styles/**/*.+(scss|sass|css)", gulp.parallel('styles'));
//     gulp.watch("src/*.html").on('change', gulp.parallel('html'));
// });

// gulp.task('html', function() {
// 	return gulp.src('src/*.html')
// 		.pipe(htmlmin({collapseWhitespace: true }))
// 		.pipe(gulp.dest('dist/'))
// });

// gulp.task('scripts', function() {
// 	return gulp.src('src/js/**/*.js')
// 		.pipe(gulp.dest('dist/js'))
// });

// gulp.task('fonts', function() {
// 	return gulp.src('src/assets/fonts/**/*')
// 		.pipe(gulp.dest('dist/fonts'))
// });

// gulp.task('icons', function() {
// 	return gulp.src('src/assets/icons/**/*')
// 		.pipe(gulp.dest('dist/icons'))
// });



// gulp.task('images', function() {
// 	return gulp.src('src/assets/images/**/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/images'))
// });

// gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'html', 'images'));


