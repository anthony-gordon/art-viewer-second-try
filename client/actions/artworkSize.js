export const MAKE_ARTWORK_BIGGER = "MAKE_ARTWORK_BIGGER";
export const MAKE_ARTWORK_SMALLER = "MAKE_ARTWORK_SMALLER";

export function makeTheArtworkBigger(width) {
  return {
    type: MAKE_ARTWORK_BIGGER,
    width
  };
}

export function makeTheArtworkSmaller(width) {
  console.log(" smaller action", width);
  return {
    type: MAKE_ARTWORK_SMALLER,
    width
  };
}
