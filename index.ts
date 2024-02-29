import { parse, stringify } from 'qs';

interface SetQueryStringConfig {
  /** 请求地址 */
  url: string;
  /** 添加的queryString */
  addQuery: { [key: string]: string };
  /** 是否覆盖原参数 */
  cover?: boolean;
}

/** 设置url querystring */
export const setQueryString = (config: SetQueryStringConfig): string => {
  const { url, addQuery, cover } = config;
  const urlData = url.split('?');
  const oldQuery = parse(urlData[1]);
  const newQuery = cover
    ? { ...oldQuery, ...addQuery }
    : { ...addQuery, ...oldQuery };

  return `${urlData[0]}?${stringify(newQuery)}`;
};
