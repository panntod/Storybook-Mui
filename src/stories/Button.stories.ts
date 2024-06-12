import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MuiButton } from "@/components/Button";

const meta = {
  title: "Atomic/Button",
  component: MuiButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["contained", "outlined", "text"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "success", "warning", "danger"],
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
    onClick: { action: "clicked" },
  },
  args: {
    color: "primary",
    variant: "contained",
    size: "medium",
    label: "Button",
    onClick: fn(),
  },
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    color: "success",
    label: "Success Button",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    label: "Secondary Button",
  },
};

export const Warning: Story = {
  args: {
    color: "warning",
    label: "Warning Button",
  },
};

export const Danger: Story = {
  args: {
    color: "error",
    label: "Danger Button",
  },
};
