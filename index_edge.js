/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'RoundRect',
                type: 'rect',
                rect: ['8px', '39px','180px','133px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(151,243,97,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'sha2',
                type: 'image',
                rect: ['120px', '29px','180px','163px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sha.png",'0px','0px']
            },
            {
                id: 'name3',
                type: 'image',
                rect: ['-1px', '4px','300px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"name.png",'0px','0px'],
                transform: [[],[],[],['0.95','0.95']]
            },
            {
                id: 'p2',
                type: 'image',
                rect: ['0px', '46px','200px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'li2',
                type: 'image',
                rect: ['-3px', '52px','200px','204px','auto', 'auto'],
                clip: ['rect(0px 200px 29.625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"li.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'addr3',
                type: 'image',
                rect: ['-3px', '64px','200px','153px','auto', 'auto'],
                clip: ['rect(56.25px 200px 126.75px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"addr.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'visnik_zdorovya',
                type: 'image',
                rect: ['11px', '4px','274px','173px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"visnik_zdorovya.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_li2}": [
                ["style", "top", '52px'],
                ["transform", "scaleY", '0.8'],
                ["style", "background-position", [0,30], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '1'],
                ["style", "left", '-3px'],
                ["style", "clip", [0,200,29.625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_RoundRect}": [
                ["style", "top", '39px'],
                ["style", "clip", [0,180,133,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '133px'],
                ["style", "opacity", '0'],
                ["style", "left", '8px'],
                ["color", "background-color", 'rgba(151,243,97,1.00)']
            ],
            "${_visnik_zdorovya}": [
                ["style", "top", '4px'],
                ["style", "height", '173px'],
                ["style", "opacity", '0'],
                ["style", "left", '11px'],
                ["style", "width", '274px']
            ],
            "${_sha2}": [
                ["style", "top", '38px'],
                ["style", "opacity", '0'],
                ["style", "left", '115px'],
                ["transform", "rotateZ", '-11deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_name3}": [
                ["style", "top", '4px'],
                ["transform", "scaleY", '0.95'],
                ["transform", "scaleX", '0.95'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px']
            ],
            "${_p2}": [
                ["style", "top", '46px'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "background-position", [0,28.125], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_addr3}": [
                ["style", "top", '64px'],
                ["transform", "scaleY", '0.8'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px'],
                ["style", "clip", [56.25,200,126.75,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "transform", "${_sha2}", "rotateZ", '-11deg', { fromValue: '-11deg'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_li2}", "clip", [0,200,61.5,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,200,29.625,0]}], position: 1860, duration: 540, easing: "easeInOutQuad" },
                { id: "eid69", tween: [ "style", "${_li2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid10", tween: [ "style", "${_sha2}", "left", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_RoundRect}", "clip", [0,180,86.5,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,180,133,0]}], position: 0, duration: 240, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_sha2}", "opacity", '1', { fromValue: '0'}], position: 160, duration: 205, easing: "easeInOutQuad" },
                { id: "eid64", tween: [ "style", "${_sha2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid75", tween: [ "style", "${_visnik_zdorovya}", "opacity", '1', { fromValue: '0'}], position: 13000, duration: 367, easing: "easeInOutQuad" },
                { id: "eid17", tween: [ "style", "${_p2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,28.125]}], position: 1000, duration: 295, easing: "easeInOutQuad" },
                { id: "eid15", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 205, easing: "easeInOutQuad" },
                { id: "eid67", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid13", tween: [ "style", "${_name3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 205, easing: "easeInOutQuad" },
                { id: "eid68", tween: [ "style", "${_name3}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "style", "${_li2}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,30]}], position: 1500, duration: 360, easing: "easeInOutQuad" },
                { id: "eid37", tween: [ "style", "${_li2}", "background-position", [0,-35.625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4000, duration: 500, easing: "easeInOutQuad" },
                { id: "eid40", tween: [ "style", "${_li2}", "background-position", [0,-73.125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-35.625]}], position: 6825, duration: 575, easing: "easeInOutQuad" },
                { id: "eid45", tween: [ "style", "${_li2}", "background-position", [0,-142.5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-73.125]}], position: 9750, duration: 555, easing: "easeInOutQuad" },
                { id: "eid18", tween: [ "style", "${_p2}", "opacity", '1', { fromValue: '0'}], position: 1130, duration: 205, easing: "easeInOutQuad" },
                { id: "eid66", tween: [ "style", "${_p2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid46", tween: [ "style", "${_addr3}", "background-position", [0,67.5], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6040, duration: 227, easing: "easeInOutQuad" },
                { id: "eid33", tween: [ "style", "${_addr3}", "opacity", '1', { fromValue: '0'}], position: 1295, duration: 205, easing: "easeInOutQuad" },
                { id: "eid49", tween: [ "style", "${_addr3}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 75, easing: "easeInOutQuad" },
                { id: "eid51", tween: [ "style", "${_addr3}", "opacity", '1', { fromValue: '0'}], position: 6224, duration: 75, easing: "easeInOutQuad" },
                { id: "eid65", tween: [ "style", "${_addr3}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "style", "${_sha2}", "top", '38px', { fromValue: '38px'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1252639");
