export const arrayToStr = (arr) => arr.join(" ").trim();

export function* rangeGen(start = 0, end, step = 1) {
  for (let i = start; i < end; i = i + step) {
    yield i;
  }
}

export const range = (start, end) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};
