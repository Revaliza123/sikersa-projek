export const ReactSelectStyle = {
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? "var(--black-25)" : "var(--white)",
    borderColor: "var(--black-75, #ccc)",
    borderWidth: "2px",
    color: "$input-color",
    padding: ".3rem",
    "&:focus": {
      ...styles[":focus"],
      backgroundColor: "var(--primary-25)",
      borderColor: "var(--primary-400)",
      boxShadow: "0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)",
    },
    ":hover": {
      ...styles[":hover"],
      borderColor: "var(--primary-400)",
    },
    ":active": {
      ...styles[":active"],
      borderColor: "var(--primary-400)",
    },
    minHeight: "30px",
  }),
  input: (styles: any) => ({
    ...styles,
    color: "var(--black-800)",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--primary-25)",
    marginTop: "6px",
    marginBottom: "6px",
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: "var(--black)",
    padding: "0",
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    padding: ".5rem",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "var(--black)",
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
    ":hover": {
      color: "var(--black)",
      backgroundColor: "var(--primary-300)",
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
  }),
  menuPortal: (styles: any) => ({
    ...styles,
    zIndex: 9999,
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
    color: "var(--black)",
    ":hover": {
      ...styles[":hover"],
      backgroundColor: "var(--primary-50)",
    },
    ":focus": {
      ...styles[":focus"],
      backgroundColor: "var(--primary-50)",
    },
  }),
}

export const ReactSelectUserStyle = {
  ...ReactSelectStyle,
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? "var(--black-25)" : "var(--white)",
    border: "none",
    color: "$input-color",
    fontFamily: "Montserrat,sans-serif",
    fontSize: "1rem",
    fontWeight: 300,
    "&:focus": {
      ...styles[":focus"],
      backgroundColor: "var(--primary-10)",
      border: "none",
      boxShadow: "none",
    },
    ":hover": {
      ...styles[":hover"],
      border: "none",
    },
    ":active": {
      ...styles[":active"],
      border: "none",
    },
    minHeight: "calc(1.5em + 1.5rem)",
  }),
}

export const ReactSelectStyleLight = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
    borderColor: "var(--white, #ccc)",
    color: "$input-color",
    padding: ".3rem",
    "&:focus": {
      ...styles[":focus"],
      backgroundColor: "var(--white)",
      borderColor: "var(--primary-400)",
      boxShadow: "0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)",
    },
    ":hover": {
      ...styles[":hover"],
      borderColor: "var(--primary-400)",
    },
    ":active": {
      ...styles[":active"],
      borderColor: "var(--primary-400)",
    },
    minHeight: "30px",
  }),
  input: (styles: any) => ({
    ...styles,
    color: "var(--black-800)",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
    marginTop: "6px",
    marginBottom: "6px",
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: "var(--black)",
    padding: "0",
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    padding: ".5rem",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "var(--black)",
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
    ":hover": {
      color: "var(--black)",
      backgroundColor: "var(--primary-300)",
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
    color: "var(--black)",
    ":hover": {
      ...styles[":hover"],
      backgroundColor: "var(--primary-50)",
    },
    ":focus": {
      ...styles[":focus"],
      backgroundColor: "var(--primary-50)",
    },
  }),
}

export const ReactSelectStyleKtpKK = {
  control: (styles: any, { isDisabled }: any) => ({
    ...styles,
    backgroundColor: isDisabled ? "var(--black-25)" : "var(--white)",
    borderColor: "var(--black-75, #ccc)",
    borderWidth: "2px",
    color: "$input-color",
    padding: ".3rem",
    "&:focus": {
      ...styles[":focus"],
      backgroundColor: "var(--primary-25)",
      borderColor: "var(--primary-400)",
      boxShadow: "0 0 0 0.25rem rgba(var(--primary-rgb, #5E5CE6), 0.25)",
    },
    ":hover": {
      ...styles[":hover"],
      borderColor: "var(--primary-400)",
    },
    ":active": {
      ...styles[":active"],
      borderColor: "var(--primary-400)",
    },
    minHeight: "30px",
  }),
  input: (styles: any) => ({
    ...styles,
    color: "var(--black-800)",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--primary-25)",
    marginTop: "6px",
    marginBottom: "6px",
  }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    color: "var(--black)",
    padding: "0",
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    padding: ".5rem",
  }),
  singleValue: (styles: any) => ({
    ...styles,
    color: "var(--black)",
  }),
  multiValue: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
  }),
  multiValueLabel: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
  }),
  multiValueRemove: (styles: any) => ({
    ...styles,
    color: "var(--black-500)",
    backgroundColor: "var(--black-100)",
    ":hover": {
      color: "var(--black)",
      backgroundColor: "var(--primary-300)",
    },
  }),
  menu: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
  }),
  menuPortal: (styles: any) => ({
    ...styles,
    zIndex: 9999,
  }),
  option: (styles: any) => ({
    ...styles,
    backgroundColor: "var(--white)",
    color: "var(--black)",
    ":hover": {
      ...styles[":hover"],
      backgroundColor: "var(--primary-50)",
    },
    ":focus": {
      ...styles[":focus"],
      backgroundColor: "var(--primary-50)",
    },
  }),
  container: (styles: any) => ({
    ...styles,
    width: "13rem",
  }),
}
