function calculateTotal(items) {
  items.forEach(item => Calculate(item))

  return items
}

function Calculate(item) {
  item.total = parseFloat(((item.price - (item.price * item.discount)) * item.quantity).toFixed(2))

  return item
}

module.exports = calculateTotal
