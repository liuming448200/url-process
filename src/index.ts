const urlProcess = () => {
  const addSearchParam = (url:string, name:string, value:string):string => {
    url += (-1 === (url.indexOf('?')) ? '?' : '&');
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
  }

  return {
    addSearchParam,
  }
}

export default urlProcess
