import type { Meta, StoryObj } from "@storybook/react";
import ReactSpotifyText from "./ReactSpotifyText";
import React from "react";

const meta: Meta<typeof ReactSpotifyText> = {
  component: ReactSpotifyText,
};

type Story = StoryObj<typeof ReactSpotifyText>;
export default meta;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#222",
        color: "#fff",
      }}
    >
      <div
        style={{
          fontFamily: "helvetica",
          fontSize: "2rem",
          maxWidth: "100%",
          width: "35rem",
          fontWeight: "bolder",
        }}
      >
        <ReactSpotifyText text="This is a really long title, check it out. Check this out." />
      </div>
    </div>
  ),
};
