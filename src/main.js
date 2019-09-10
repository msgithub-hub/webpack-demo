// main.js是我们项目的入口js文件
// 导入jquery
import $ from 'jquery';

import './css/index.css';
import './css/index1.less';


//如果要处理一些非js类型的文件（比如css），我们需要手动安装一些合适的第三方loader加载器



$(function () {
    $('li:odd').css('background','pink');
    $('li:even').css('background','red');
});