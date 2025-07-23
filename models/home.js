const names = [];

module.exports = class home{
  
  constructor(Name,price,location,rating  ) {
    this.Name = Name;
    this.price = price;
    this.location = location;
    this.rating = rating;

  }

  save() {
    names.push(this);
  }

  static fetchAll() {
    return names;
  }
}