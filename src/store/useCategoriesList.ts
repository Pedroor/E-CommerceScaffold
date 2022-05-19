import create from "zustand";

type State = {
  activeCategoryIdentifier: number;
  updateCategoryListIdentifier: (categoryIdentifier: number) => void;
};

export const useCategoriesList = create<State>(
  (set) =>
    ({
      updateCategoryListIdentifier: (categoryIdentifier: number) => {
        useCategoriesList.setState({
          activeCategoryIdentifier: categoryIdentifier,
        });
      },
    } as State)
);
