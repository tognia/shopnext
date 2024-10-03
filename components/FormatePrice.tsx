
type Amount = {
    amount: number;
}

const FormatePrice = ({amount}: Amount) => {
    const formatedAmount = new Number(amount).toLocaleString("en-US", {
        style:"currency",
        currency: "USD",
        minimumFractionDigits:2
    })
  return (
   <span> {formatedAmount} </span>
  )
}

export default FormatePrice
