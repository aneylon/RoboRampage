import * as apiUtils from "./apiUtil";
// returns a promise (.json())
// use in function promise call to assign data.
export function exampleGetCall() {
  const { get } = useApiUtils();
  return get(url).then(apiUtils.handleResponse).catch(apiUtils.handleError);
}
