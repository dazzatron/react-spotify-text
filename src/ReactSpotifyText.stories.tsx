import type { Meta, StoryObj } from "@storybook/react";
import ReactSpotifyText from "./ReactSpotifyText";
import React from "react";

const meta: Meta<typeof ReactSpotifyText> = {
  component: ReactSpotifyText,
};

type Story = StoryObj<typeof ReactSpotifyText>;
export default meta;

export const Default: Story = {
  render: () => (
    <div
      style={{
        fontFamily: "arial",
        fontSize: "1rem",
        maxWidth: "100%",
        width: "20rem",
      }}
    >
      <ReactSpotifyText text="This is a really long title, check it out. Check this out." />
    </div>
  ),
};
