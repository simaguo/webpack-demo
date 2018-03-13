/**
 * Created by Administrator on 2018-3-10.
 */
import Layer from './components/layer/layer';
import './css/common.css';
const App = function () {
    var app = document.getElementById("app");
    var layer = new Layer();
    app.innerHTML = layer.tpl;
}
new App();