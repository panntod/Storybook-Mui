import type { Meta, StoryObj } from "@storybook/react";
import MuiAlert from "@/components/Alert";

const meta = {
  title: "Molecule/Alert",
  component: MuiAlert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["filled", "outlined"],
      },
    },
    severity: {
      control: {
        type: "select",
        options: ["success", "warning", "error", "info"],
      },
    },
  },
  args: {
    variant: "filled",
    severity: "success",
    title: "Success Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
} satisfies Meta<typeof MuiAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    severity: "success",
    title: "Success Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    title: "Warning Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    title: "Error Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
};

export const Info: Story = {
  args: {
    severity: "info",
    title: "Info Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    title: "Filled Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    title: "Outlined Alert",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
  },
};

// export const WithAction: Story = {
//     args: {
//       title: "With Action Alert",
//       message:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
//       children: (
//         <MuiAlert color="inherit" size="small">
//           Konz
//         </MuiAlert>
//       ),
//     },
//   };
