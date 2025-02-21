import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@test/ui";

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "Hello world",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
