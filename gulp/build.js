'use strict';

const annotate = require('gulp-ng-annotate');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const gulp = require('gulp');
const jsFileList = require('./js-file-list');
const merge = require('merge-stream');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const templateCache = require('gulp-angular-templatecache');
const uglify = require('gulp-uglify');

gulp.task('build', [ 'clean' ], () => {
  const css = gulp
    .src([
      'src/css/*.css',
      'src/views/**/*.css',
      'src/components/**/*.css',
      'lib/ionic/css/ionic.css'
     ])
    .pipe(cleanCss())
    .pipe(concat('css/styles.min.css'));

  const js = gulp
    .src(jsFileList, { base: 'src' })
    .pipe(sourcemaps.init())
    .pipe(annotate({ single_quotes: true }))
    .pipe(concat('js/app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write());

  const templates = gulp
    .src([
      'src/templates/**/*.html',
      'src/components/**/*.html',
      'src/views/**/*.html' 
    ])
    .pipe(templateCache({
      standalone: true,
      moduleSystem: 'IIFE'
    }))
    .pipe(rename('js/templates.js'));

  const res = gulp
    .src([
      'src/fonts/**/*',
      'src/img/**/*',
      'src/lib/**/*',
      'src/index.html' ], { base: './src' });

  return merge(css, js, templates, res)
    .pipe(gulp.dest('www'));
});
