import { Provider, useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { addItem, clearCart, removeItem } from "./cart-slice";
import { ecommerceStore, type EcommerceRootState } from "./store";

const useEcommerceSelector: TypedUseSelectorHook<EcommerceRootState> =
  useSelector;

const catalog = [
  { id: "watch-1", name: "Jam Analog", price: 120 },
  { id: "watch-2", name: "Jam Digital", price: 95 },
  { id: "watch-3", name: "Jam Smart", price: 250 },
] as const;

/**
 * Tampilan katalog dan keranjang belanja.
 *
 * Dependency Inversion: UI hanya memakai action creator dan hook bertipe,
 * tidak mengakses store secara langsung.
 *
 * @returns Katalog produk dan ringkasan keranjang.
 */
const StoreView = () => {
  const items = useEcommerceSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="panel">
      <h3 className="text-lg font-semibold text-blue-400">
        E-Commerce — Keranjang
      </h3>
      <div className="grid gap-2 sm:grid-cols-3">
        {catalog.map((product) => (
          <div
            key={product.id}
            className="grid gap-2 p-3 border rounded-lg border-slate-700 bg-slate-900/50"
          >
            <p className="font-medium">{product.name}</p>
            <p className="text-sm text-slate-400">${product.price}</p>
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(addItem(product))}
            >
              Tambah ke keranjang
            </button>
          </div>
        ))}
      </div>

      <div className="grid gap-2">
        <h4 className="font-semibold">Keranjang ({items.length})</h4>
        {items.length === 0 && (
          <p className="text-sm text-slate-400">Kosong.</p>
        )}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-2 border rounded-lg border-slate-700"
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <button
              type="button"
              className="btn-danger"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Hapus
            </button>
          </div>
        ))}
        <p className="font-semibold">Total: ${total}</p>
        <button
          type="button"
          className="btn justify-self-start"
          onClick={() => dispatch(clearCart())}
        >
          Kosongkan
        </button>
      </div>
    </div>
  );
};

/**
 * Demo E-Commerce dengan Provider lokal.
 *
 * @returns Provider keranjang berisi katalog dan keranjang.
 */
export default function MernEcommerceStore() {
  return (
    <Provider store={ecommerceStore}>
      <StoreView />
    </Provider>
  );
}
