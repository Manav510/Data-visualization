export const getCustomerInfo = async () => {
  return await fetch("https://api-generator.retool.com/K4i6yI/data").then(
    (res) => res.json()
  );
};
