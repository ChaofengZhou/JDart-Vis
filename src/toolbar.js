var d3 = require('d3');
var visChart = require('./vis-chart');

var id = 0;
var simpleJson;
var complexJson;
var currDemo;

function $id(id) {
  return document.getElementById(id);
}

function outputCodeLine(line, i) {
  line = line.split(" ").join("&nbsp;");
  var code = $id('code');
  var span = document.createElement("span");
  span.className = "code-line";
  span.id = "line-" + i;
  span.innerHTML = line;
  code.appendChild(span);
}

function switchDemo() {
  if (currDemo === 'simple') {
    if (!complexJson) {
      d3.json("data/merarbiter_v0.json", function(json) {
        preprocessJson(json);
        complexJson = json;
        visChart.loadJsonToChart(json);
      });
    } else {
      visChart.loadJsonToChart(complexJson);
    }
    $id('switch-demo').innerHTML = 'Switch to Simple Demo';
    currDemo = 'complex';
  } else {
    visChart.loadJsonToChart(simpleJson);
    currDemo = 'simple';
  }
}

function init() {
  d3.json("data/demo2.json", function(json) {
    preprocessJson(json);
    simpleJson = json;
    visChart.loadJsonToChart(json);
    currDemo = 'simple';
    json.code.forEach(function(line, i) {
      outputCodeLine(line, i + 1);
    });
  });
  $id('expand-errors').onclick = visChart.expandErrors;
  $id('expand-ok').onclick = visChart.expandOK;
  $id('expand-dontknow').onclick = visChart.expandDontKnow;
  $id('switch-demo').onclick = switchDemo;
}

function preprocessJson(obj) {
  if (obj.result && obj.result.startsWith('ERROR')) {
    var tmp = obj;
    while (tmp) {
      tmp.hasError = true;
      tmp = tmp.parent;
    }
  } else if (obj.result && obj.result.startsWith('OK')) {
    var tmp = obj;
    while (tmp) {
      tmp.hasOK = true;
      tmp = tmp.parent;
    }
  } else if (obj.result && obj.result.startsWith('DONT_KNOW')) {
    var tmp = obj;
    while (tmp) {
      tmp.hasDontKnow = true;
      tmp = tmp.parent;
    }
  }
  obj._id = id++;
  if (obj.children) {
    obj.children.forEach(function(child) {
      child.parent = obj;
      preprocessJson(child);
    });
  }
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

init();
