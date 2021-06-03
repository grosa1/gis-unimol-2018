var size = 0;
var placement = 'point';
function categories_corine_rev_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '112':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '211':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,168,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '222':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(242,166,77,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '311':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(128,255,0,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '313':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(77,255,0,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '321':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(204,242,77,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '322':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,255,128,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '324':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,0,2,0.494117647059)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(166,242,0,0.494117647059)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_corine_rev_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("COD_CORINE");
    var labelText = "";
    size = 0;
    var labelFont = "9.75px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_corine_rev_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
