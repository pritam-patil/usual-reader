export function getFrameUrl(input = '') {
  // removes ?source=* from the url and returns it
  const SOURCE = '?source';
  if (input.includes(SOURCE)) {
    const sourceAt = input.indexOf(SOURCE);
    return input.slice(0, sourceAt);
  }

  return input;
}

export function deleteAllCookies2() {
  const allCookies = document.cookie.split(';');

  // The "expire" attribute of every cookie is
  // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
  for (let i = 0; i < allCookies.length; i++) {
    document.cookie = allCookies[i] + '=;expires=' + new Date(0).toUTCString();
  }
}

export function deleteAllDomainCookies() {
  var cookies = document.cookie.split('; ');
  for (var c = 0; c < cookies.length; c++) {
    var d = window.location.hostname.split('.');
    while (d.length > 0) {
      var cookieBase =
        encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
        '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
        d.join('.') +
        ' ;path=';
      var p = location.pathname.split('/');
      document.cookie = cookieBase + '/';
      while (p.length > 0) {
        document.cookie = cookieBase + p.join('/');
        p.pop();
      }
      d.shift();
    }
  }
}

export function deleteAllCookies() {
  function deleteCookie(cookiename) {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const expires = ';expires=' + d;
    const name = cookiename;
    console.log(`>> ${name}`);
    const value = '';
    document.cookie = name + '=' + value + expires + '; path=/acc/html';
  }

  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const spcook = cookies[i].split('=');
    deleteCookie(spcook[0]);
  }
}
