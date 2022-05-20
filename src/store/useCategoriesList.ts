import create from "zustand";

type State = {
  activeCategoryIdentifier: string;
  updateCategoryListIdentifier: (categoryIdentifier: string) => void;
};

export const useCategoriesList = create<State>(
  (set) =>
    ({
      updateCategoryListIdentifier: (categoryIdentifier: string) => {
        useCategoriesList.setState({
          activeCategoryIdentifier: categoryIdentifier,
        });
      },
    } as State)
);
