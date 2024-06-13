import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MuiCard } from "@/components/Card";
import { Box } from "@mui/material";
import { MuiButton } from "@/components/Button";

const meta = {
    title: "Molecule/Card",
    component: MuiCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
    args: {
        title: "Card Material Ui",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos praesentium accusantium?",
        onClick: fn()
    },
} satisfies Meta<typeof MuiCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Card",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?"
    },
};

export const Custom: Story = {
    args: {
        title: "Card",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, dolor?",
        children: (
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                <MuiButton label="Accept" color="primary" variant="contained" />
                <MuiButton label="Decline" color="primary" variant="text" />
            </Box>
        )
    },
};