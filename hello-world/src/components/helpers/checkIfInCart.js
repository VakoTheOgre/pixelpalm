export default function(product_id, cart_id) {
  if (product_id == cart_id) {
    return true
  } else {
    return false
  }
}