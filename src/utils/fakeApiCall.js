export async function fakeApiCall(stallTime = 1000) {
  await new Promise((resolve) => setTimeout(resolve, stallTime));
}
