"use client";

import { useState } from "react";
import { useLang } from "./LangProvider";

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="text-fog">{props.label}</span>
        <span className="font-mono text-paper">{props.display}</span>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="mt-2 w-full"
      />
    </label>
  );
}

export function LossCalculator() {
  const { t, lang } = useLang();
  const c = t.problem.calc;
  const [orders, setOrders] = useState(500);
  const [rate, setRate] = useState(4);
  const [shipping, setShipping] = useState(20);

  const currency = lang === "ro" ? "lei" : "RON";
  const fmt = new Intl.NumberFormat(lang === "ro" ? "ro-RO" : "en-US", { maximumFractionDigits: 0 });
  // Refused parcel = outbound + return leg, both charged to the merchant.
  const monthly = orders * (rate / 100) * shipping * 2;

  return (
    <div className="chamfer bg-slate p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold">{c.title}</h3>
      <div className="mt-6 space-y-6">
        <Slider label={c.orders} value={orders} min={50} max={3000} step={50} display={fmt.format(orders)} onChange={setOrders} />
        <Slider label={c.rate} value={rate} min={1} max={15} step={0.5} display={`${rate}%`} onChange={setRate} />
        <Slider label={c.shipping} value={shipping} min={10} max={40} step={1} display={`${shipping} ${currency}`} onChange={setShipping} />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-rule pt-6">
        <div>
          <p className="font-display text-3xl font-bold sm:text-4xl">
            {fmt.format(monthly)} <span className="text-base font-medium text-fog">{currency}</span>
          </p>
          <p className="mt-1 text-sm text-fog">{c.perMonth}</p>
        </div>
        <div>
          <p className="font-display text-3xl font-bold text-refused sm:text-4xl">
            {fmt.format(monthly * 12)} <span className="text-base font-medium text-fog">{currency}</span>
          </p>
          <p className="mt-1 text-sm text-fog">{c.perYear}</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-fog">{c.note}</p>
    </div>
  );
}
