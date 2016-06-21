import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "axis path": {
        "fill": "none",
        "stroke": "black",
        "shapeRendering": "crispEdges"
    },
    "axis line": {
        "fill": "none",
        "stroke": "black",
        "shapeRendering": "crispEdges"
    },
    "axis text": {
        "fontFamily": "sans-serif",
        "fontSize": 11
    },
    "MyRect": {
        "fill": "steelblue"
    },
    "MyText": {
        "fill": "white",
        "textAnchor": "middle"
    }
});