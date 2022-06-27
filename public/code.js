'use strict';

figma.showUI(__html__, { width: 232, height: 100 });
let isSpacersVisible = false;
figma.on("currentpagechange", () => {
    console.log("changed  ----> isSpacersVisible = " + isSpacersVisible);
    updateSpacer();
});
figma.ui.onmessage = (msg) => {
    console.log("Toggle spacer called 1...");
    if (msg.type === "toggle-spacers") {
        isSpacersVisible = msg.status;
        updateSpacer();
    }
};
function updateSpacer() {
    var list = figma.currentPage.findAll((n) => n.name[0] == "⭥" || n.name[0] == "⭤");
    list.forEach((obj) => {
        var o = obj;
        o.opacity = isSpacersVisible ? 1 : 0;
    });
}
