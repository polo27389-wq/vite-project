export function OrderSummary({ total }) {
  return (
    <div className="mt-6 rounded-lg border bg-gray-50 p-5">
      <div className="space-y-2 text-sm">
        <p className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </p>

        <p className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </p>
      </div>

      <div className="my-4 border-t" />

      <p className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </p>

      <button className="mt-5 w-full rounded-md bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700">
        Checkout
      </button>
    </div>
  );
}
