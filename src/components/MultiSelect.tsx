import React from "react";

import CreatableSelect from "react-select/creatable";

type OptionType = { value: string; label: string };
type MultiselectProps = {
  options?: OptionType[];
  placeholder?: string;
};

const Multiselect: React.FC<MultiselectProps> = ({ placeholder, options }) => {
  return (
    <CreatableSelect
      isMulti
      options={options || []}
      placeholder={placeholder}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: "#E0E0E0",
          padding: 8,
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,

        colors: {
          ...theme.colors,
          primary: "#E0E0E0",
          primary25: "#FA580514",
          primary50: "#FA580514",
          primary75: "#FA580514",
          neutral20: "#111111",
          neutral60: "#111111",
          neutral50: "#FA5805",
          neutral80: "#FA5805",
          neutral90: "#FA5805",
        },
      })}
    />
  );
};

export default Multiselect;
