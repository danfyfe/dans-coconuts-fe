import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./text";

const meta: Meta<typeof Paragraph> = {
  title: "Components/Text/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: "This is a paragraph.",
  },
};