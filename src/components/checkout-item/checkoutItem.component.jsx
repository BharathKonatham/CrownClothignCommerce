
const CheckoutItem = ({item}) => {
    const {name,imageUrl,price,quantity,id} = item
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default CheckoutItem
