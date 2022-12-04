function fitsInOneBox(boxes) {
  return boxes
    .sort((box1, box2) => box1.l - box2.l)
    .every((box, index, array) => {
      if (index === 0) return true;
      return box.l > array[index - 1].l &&
        box.w > array[index - 1].w &&
        box.h > array[index - 1].h
        ? true
        : false;
    });
}
