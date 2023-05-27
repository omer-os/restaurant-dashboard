"use client";
import Button from "@components/elements/button/Button";
import React, { useState } from "react";

export type Price = {
  name: string;
  value: string;
};

type PricesTableProps = {
  prices: Price[];
  setPrices: any;
};

const PricesTable: React.FC<PricesTableProps> = ({ prices, setPrices }) => {
  const handlePriceChange = (
    index: number,
    field: keyof Price,
    value: string
  ) => {
    const newPrices = [...prices];
    newPrices[index] = { ...newPrices[index], [field]: value };
    setPrices(newPrices);
  };

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Size</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {prices.map((price, index) => (
          <tr key={index}>
            <td className="border">
              <input
                className="px-4 py-2 w-full"
                type="text"
                value={price.name}
                onChange={(e) =>
                  handlePriceChange(index, "name", e.target.value)
                }
              />
            </td>
            <td className="border">
              <input
                className="px-4 py-2 w-full"
                type="text"
                value={price.value}
                onChange={(e) =>
                  handlePriceChange(index, "value", e.target.value)
                }
              />
            </td>
          </tr>
        ))}
        <br />
        <tr>
          <td>
            <Button
              onClick={() => {
                setPrices([...prices, { name: "", value: "" }]);
              }}
            >
              Add New Row
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricesTable;
