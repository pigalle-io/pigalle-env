// /* --------------------------------------------------------------------- *
//  * This file is part of pigalle.core.env                                 *
//  *                                                                       *
//  * Copyright (c) 2018 SAS 9 Février.                                     *
//  *                                                                       *
//  * Distributed under the MIT License                                     *
//  * (license terms are at http://opensource.org/licenses/MIT).            *
//  *                                                                       *
//  * --------------------------------------------------------------------- */

const gulp = require('gulp')
const g = require('gulp-load-plugins')({lazy: true})
const path = require('path')
const fs = require('fs-then-native')
const jsdoc2md = require('jsdoc-to-markdown')

gulp.task('docs-api', () => {

})

gulp.task('docs-readme', () => {
  return g.docgen4NodeReadme.to('README.md', path.resolve('.docgen4.yml')).pipe(gulp.dest('./'))
})

gulp.task('docs', ['docs-readme'])
