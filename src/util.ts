export const waste = () => {
  return new Promise<string>((resolve) => {
    return setTimeout(() => {
      resolve("He he hu hu ha ha");
    }, 3000);
  });
};
