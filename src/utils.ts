export const byteToArray = (byte: number) => {
  const ans = [];
  for (let i = 0; i < 8; i++) {
    const tmp = (byte >> i) & 1;
    ans.push(tmp === 0 ? false : true);
  }
  console.log(ans);
  return ans;
};
