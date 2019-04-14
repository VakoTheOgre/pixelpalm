class CartItem {
  constructor(product, variant, amount) {
    this.product = product
    this.variant = variant
    this.amount = amount
  }
  // ! VARIANT GETS
  get subtotal() {
    return this.amount * this.variant.price
  }

  get size() {
    return this.variant.size
  }

  get in_stock() {
    return this.variant.in_stock
  }

  get variant_id() {
    return this.variant_id
  }

  get price() {
    return this.variant.price
  }

  // ? PRODUCT GETS
  get name() {
    return this.product.name
  }

  get product_id() {
    return this.product.printfullId
  }

  // * Global Gets
  // get amount() {
  //   return this.amount
  // }

  // * Global Methods
  static changeAmount(item, operation) {
    switch(operation) {
      case '+':
        item.amount++
        break;
      case '-':
        item.amount--
        break;
      default:
        throw new Error('No operation defined')
    }
  }
}
export default CartItem
