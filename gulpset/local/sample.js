var gulpset = require("./../gulpset");


// カスタムタスクの定義
/*
 gulpset.gulp.task("custom", function() {
 console.log(gulpset.confs.sync);
 });
 */


// 設定カスタマイズ：browserSyncのstartPathのカスタマイズ
/*
 gulpset.confs.sync.startPath = "/s_index.html?path=./contents/01_SAMPLE_UI_BUTTON/01_SAMPLE_UI_BUTTON_index.html";
*/


// 設定カスタマイズ：babelコンパイル対象のフィルタリング
/*
gulpset.confs.babel = gulpset.confs.babel.filter(function(val, num) {
	return val.file === "libs.js" || val.file === "testcat-1.js";
});
*/
