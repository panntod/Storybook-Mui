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
      },
    },
    color: {
      control: {
        type: "select",
      },
    },
    onClick: { action: "clicked" },
  },
  // The args within meta provide default values for the props of the MuiButton component
  args: {
    size: "medium",
    variant: "contained",
    onClick: fn(),
  },
  // The satisfies Meta ensures that the meta object conforms to the expected structure for a component of type MuiButton
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    label: "Primary Button",
  },
};

export const Success: Story = {
  args: {
    color: "success",
    label: "Success Button",
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
