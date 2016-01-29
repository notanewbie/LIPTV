//Use this library/module to read the schedule of a show via LocateTV.
function ReturnShow(ChanSite)
S = loadFile(ChanSite)
if(i == 0) {
Sh = S.split('<span class="link-text">')
Sho = Sh[27].split('</span>')
Show = Sho[0];
return Show;