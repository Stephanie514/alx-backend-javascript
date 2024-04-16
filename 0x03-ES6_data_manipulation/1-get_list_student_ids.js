function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  return arr.map((object) => object.id);
}

export default getListStudentIds;
