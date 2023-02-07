export function useNickName(howMany: number) {
  const nickNames: string[] = [];
  for (let i = 0; i < howMany; i++) {
    nickNames.push("Maiale volante");
  }
  return nickNames;
}
