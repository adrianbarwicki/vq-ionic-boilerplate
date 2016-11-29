'use strict';

const del = require('del');
const gulp = require('gulp');
const path = require('path');

gulp.task('clean', () => del([ 'www/*', `!www/dummy.txt` ]));
