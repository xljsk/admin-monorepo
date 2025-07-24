// local
export const _l_setItem = (key: string, data: any) => {
  const _data: any = typeof data === "object" ? JSON.stringify(data) : data;
  window.localStorage.setItem(key, _data);
};

export const _l_getItem = (key: string, no_parse?: boolean) => {
  const data = window.localStorage.getItem(key);
  if (data) {
    return no_parse ? data : JSON.parse(data);
  } else {
    return void 0;
  }
};

export const _l_remove = (key: string) => {
  window.localStorage.removeItem(key);
};

export const _l_clear = () => {
  window.localStorage.clear();
};

// session
export const _s_setItem = (key: string, data: any) => {
  const _data: any = typeof data === "object" ? JSON.stringify(data) : data;
  window.sessionStorage.setItem(key, _data);
};

export const _s_getItem = (key: string, no_parse?: boolean) => {
  const data = window.sessionStorage.getItem(key);
  if (data) {
    return no_parse ? data : JSON.parse(data);
  } else {
    return void 0;
  }
};

export const _s_remove = (key: string) => {
  window.sessionStorage.removeItem(key);
};

export const _s_clear = () => {
  window.sessionStorage.clear();
};
