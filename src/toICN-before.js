exports = {};
//CSS関連
let style = document.createElement('style');
document.head.appendChild(style);
let webSiteName = "";
if(document.title.indexOf("U-フレット") != -1){webSiteName = "ufret"};
if(document.title.indexOf("ChordWiki") != -1){webSiteName = "chordwiki"};
if(document.title.indexOf("楽器.me") != -1){webSiteName = "gakki.me"};
if(document.title.indexOf("J-Total Music!") != -1){webSiteName = "j-total"};

let sheet = style.sheet;
sheet.insertRule('.word {color:#b22222}');
sheet.insertRule('.wordtop {color:#b22222}');
sheet.insertRule('.sharp {background-color:#dbdbdb}');
sheet.insertRule('.swap {background-color:#fab9bd}');
sheet.insertRule('.sharpswap {background-color:#d19fa0}');
sheet.insertRule('.notsharpswap {background-color:#ffffff}');
sheet.insertRule('.bluechord {color:#1a4a9c !important}');
sheet.insertRule('.notbluechord {color:#000000 !important}');

