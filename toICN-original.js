Array.prototype.slice.bind(document.getElementsByClassName("chord"))().concat(Array.prototype.slice.bind(document.getElementsByTagName("rt"))()).forEach((e) => {
  let raw = ""+ e.firstChild.nodeValue;
  let m = raw.match(/^([A-G](#{0,1})(m{0,1}))([^/]*)/);
  let s = "-";
  if(m){
    let base = m[1];
    let sharp = m[2];
    let q = m[4];
    let swapped = false;
    let noMap = {"C":1, "D":2, "E":3, "F":4, "G":5, "A":6, "B":7};
    let no = noMap[base[0]];
    let isQAvailable = false;
    let unSupported = false;
    let isSharp = false;
    if("C,Dm,Em,F,G,Am,Bm".split(",").includes(base)){};
    if("Cm,D,E,Fm,Gm,A,B".split(",").includes(base)){swapped = true;};
    if(sharp == "#"){isSharp = true;};
    q = q.replace("7sus4","sus4").replace("dim7","dim").replace("7-5","m7-5");
    if("dim,7,add9,M7,sus4,aug,m7-5".split(",").includes(q)){isQAvailable = true;}else{if(q.length>0){unSupported = true;}};
    s = no + (isSharp?"[#]":"") + (swapped?"~":"") + (isQAvailable?("["+q+"]"):"" + (unSupported?"[!!"+q+"!!]":""));
    e.firstChild.nodeValue = s;
  };
})
