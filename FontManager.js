class FontManager {
    fontList = [
        new FontInfo(
            "https://fonts.googleapis.com/css?family=Open+Sans",
            "Open Sans"
        ),
        new FontInfo(
            "https://cdn.clarkhacks.com/OpenDyslexic/v3/OpenDyslexic.css",
            "OpenDyslexic"
        ),
        new FontInfo(
            "https://fonts.googleapis.com/css?family=Roboto",
            "Roboto"
        )
    ];
    defaultFont = this.fontList[0];

    static createStyleSheetOfColorAndFont(primaryColor, backgroundColor, fontUrl, fontName, fontSize) {
        return `@import url('${fontUrl}');
        body{
        background-color: ${backgroundColor};
        color:${primaryColor};
        font-family: ${fontName};
        font-size: ${fontSize}px; 
        }
       `
    }

    ofName(name) {
        let found = this.fontList.find(function (element) {
            return element.name === name;
        });
        if (!found) {
            found = this.defaultFont;
        }
        return found;
    }
}

class FontInfo {
    constructor(url, name) {
        this.name = name;
        this.url = url;
    }
}
