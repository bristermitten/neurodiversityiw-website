function createStyleSheetOfColorAndFont(primaryColor, backgroundColor, fontUrl, fontName) {
    return `<style>
@import url('${fontUrl}');
body{
background-color: ${backgroundColor};
}
.picked-text{
color:${primaryColor};
font-family: ${fontName}
}
</style>`
}