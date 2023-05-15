"use client";
import React, { useState } from "react";

interface EditableTextProps {
  edit: boolean;
  State: string;
  setState: any;
  onBlur: any;
}

export const EditableText: React.FC<EditableTextProps> = ({
  edit,
  State,
  setState,
  onBlur,
}) => {
  return edit ? (
    <textarea
      onBlur={onBlur}
      value={State}
      onChange={(e) => setState(e.target.value)}
      className="w-full p-2 rounded border border-gray-300"
    />
  ) : (
    <span>{State}</span>
  );
};
