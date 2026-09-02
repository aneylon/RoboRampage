import * as apiUtils from "./apiUtil";
import useApiUtils from "./useApiUtil";
// returns a promise (.json())
// use in function promise call to assign data.
const useExampleApi = () => {
  const { get } = useApiUtils();
  function exampleGetCall(url) {
    return get(url).then(apiUtils.handleResponse).catch(apiUtils.handleError);
  }

  return { exampleGetCall };
};

export default useExampleApi;
