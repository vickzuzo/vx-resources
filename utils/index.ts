import qs from "query-string";
interface URLQUeryParams {
  params: string;
  key: string;
  value: string | null;
  keysToRemove?: string[];
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: URLQUeryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  if (keysToRemove) {
    Object.keys(currentUrl).forEach((key) => {
      if (keysToRemove.includes(key)) {
        delete currentUrl[key];
      }
    });
  } else {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
}
