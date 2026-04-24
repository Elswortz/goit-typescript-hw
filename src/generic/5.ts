interface KeyValuePair<T extends PropertyKey, U> {
  key: T;
  value: U;
}

const pair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const pair2: KeyValuePair<number, number> = {
  key: 67876,
  value: 70,
};
