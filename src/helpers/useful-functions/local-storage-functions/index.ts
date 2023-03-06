interface ILocalStorageProps {
  collectionName: "language";
  value: string;
}

export const saveToLocalStorage = ({
  collectionName,
  value,
}: ILocalStorageProps) => localStorage.setItem(collectionName, value);

export const getFromLocalStorage = (
  collectionName: ILocalStorageProps["collectionName"]
) => JSON.parse(String(localStorage.getItem(collectionName)));
