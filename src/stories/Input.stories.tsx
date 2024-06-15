import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MuiInput } from "@/components/Input";

const meta = {
    title: "Atomic/Input",
    component: MuiInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
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
        error: {
            control: {
                type: "boolean"
            }
        }
    },
    args: {
        label: "Default",
        size: "medium",
        variant: "filled",
        error: false,
        onClick: fn(),
    },
} satisfies Meta<typeof MuiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "standard",
        label: "Default",
        onChange(value) { },
    },
};

export const Filled: Story = {
    args: {
        variant: "filled",
        label: "Filled",
        onChange(value) { },
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        label: "Outlined",
        onChange(value) { },
    },
};

export const Error: Story = {
    args: {
        variant: "standard",
        label: "Error",
        error: true,
        onChange(value) { },
    },
};

export const Disabled: Story = {
    args: {
        variant: "standard",
        label: "Disabled",
        disabled: true,
        onChange(value) { },
    },
};

export const Password: Story = {
    args: {
        variant: "standard",
        label: "Password",
        type: "password",
        onChange(value) { },
    },
};

export const Number: Story = {
    args: {
        variant: "standard",
        label: "Number",
        type: "number",
        onChange(value) { },
    },
};