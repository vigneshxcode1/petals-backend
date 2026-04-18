class apiFeature {
  constructor(query, strquery) {
    this.query = query;
    this.strquery = strquery;
  }

  search() {
    const keyword = this.strquery.keyword
      ? {
        name: {
          $regex: this.strquery.keyword,
          $options: "i",
        },
      }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const querystrcopy = { ...this.strquery };

    const removefield = ["keyword", "limit", "page"];
    removefield.forEach((field) => delete querystrcopy[field]);

    // ✅ Fix category (case-insensitive)
    if (querystrcopy.category) {
      querystrcopy.category = {
        $regex: `^${querystrcopy.category}$`,
        $options: "i",
      };
    }

    let strquery = JSON.stringify(querystrcopy);
    strquery = strquery.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(strquery));
    return this;
  }
}

export default apiFeature;