import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MuiButton } from "@/components/Button";

// The meta object configures the Storybook metadata for the MuiButton stories
const meta = {
  // The title under which the stories will be grouped.
  title: "Atomic/Button",
  // The component itself, which is MuiButton.
  component: MuiButton,
  // Storybook parameters and tags for additional settings and documentation.
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes to define the controls for Storybook's UI, allowing you to dynamically change the props of the component.
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
        options: ["primary", "secondary", "success", "warning", "danger"],
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
  // The args within meta provide default values for the props of the MuiButton component
  args: {
    color: "primary",
    variant: "contained",
    size: "medium",
    label: "Button",
    onClick: fn(),
  },
  // The satisfies Meta ensures that the meta object conforms to the expected structure for a component of type MuiButton
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
