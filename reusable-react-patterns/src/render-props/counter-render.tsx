import { useState, type ReactNode } from "react";

interface RenderPropsProps {
  render: (value: number) => ReactNode;
}

/**
 * Render Props: komponen menyerahkan nilai ke fungsi render.
 *
 * Dependency Inversion: pemilik data tidak tahu bagaimana data ditampilkan.
 */
const CounterRender = ({ render }: RenderPropsProps) => {
  const [value, setValue] = useState(0);
  return (
    <div className="panel">
      <button
        type="button"
        className="btn"
        onClick={() => setValue((v) => v + 1)}
      >
        Tambah
      </button>
      {render(value)}
    </div>
  );
};

export default CounterRender;
