/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
const transformCss = require('../jsify-css').transformCss;
const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs-extra');

function main() {
  return transformCss('./build-system/tasks/create-golden-css/css/main.css', {
    normalizeWhitespace: false,
    discardComments: false,
  }).then(function(result) {
    fs.writeFileSync('./test/golden-files/main.css', result);
  });
}

gulp.task('create-golden-css', 'Creates a golden file for untransformed css',
    main);
