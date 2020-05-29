import { ThemeType } from "grommet";

export const theme: ThemeType = {
  global: {
    font: {
      family: "'Open Sans', sans-serif;",
    },
    colors: {
      brand: "#0094F5",
      "accent-1": "#0094F5"
    }
  },
  button: {
    primary: {
      extend: "padding: 16px 52px; border-radius: 100px; &:hover { background: #0094F5; };"
    },
    padding: { vertical: "8px", horizontal: "36px" },
    extend: " &:hover { background: rgba(0, 148, 245, 0.1); } ",
    border: {
      radius: "100px"
    }
  },
  rangeInput: {
    track: {
      height: "2px"
    }
  },
  icon: {
    size: {
      medium: "18px"
    }
  },
  select: {
    control: {
      extend: `border-radius: 100px`
    },
  }
}