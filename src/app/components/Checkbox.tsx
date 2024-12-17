import React, { ChangeEvent } from "react";

type CheckboxTypes = {
  isActive: boolean;
  onChange?: (e: ChangeEvent) => void;
  readOnly?: boolean;
};

const Checkbox = ({ isActive, onChange, readOnly }: CheckboxTypes) => {
  return (
    <input
      type="checkbox"
      className="w-4 h-4 rounded-full block shrink-0 text-purple-600 checked:bg-purple-600 cursor-pointer"
      checked={isActive}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default Checkbox;
