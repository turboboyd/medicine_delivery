import { useSelector } from "react-redux";

import {
  selectProviders,
  selectMedicines,
  selectIsLoading,
  selectError,
} from "../redux/drugStoresSelectors";

const useDrugStores = () => {
  const providers = useSelector(selectProviders);
  const medicines = useSelector(selectMedicines);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    providers,
    medicines,
    isLoading,
    error,
  };
};

export default useDrugStores;
