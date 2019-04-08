class FontManager {
    fontList = [
        new FontInfo(
            "https://cdn.clarkhacks.com/OpenDyslexic/v3/OpenDyslexic.css",
            "OpenDyslexic"
        ),
        new FontInfo(
            "https://fonts.googleapis.com/css?family=Roboto",
            "Roboto"
        )
    ];
}
class FontInfo {
    constructor(url, name) {
        this.name = name;
        this.url = url;
    }
}