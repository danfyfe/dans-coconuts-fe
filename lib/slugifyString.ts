const slugifyString = (string: string): string => {
  return string.replaceAll(' ','-').toLowerCase();
}
export default slugifyString;
