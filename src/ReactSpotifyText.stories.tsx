import type { Meta, StoryObj } from "@storybook/react";
import ReactSpotifyText from "./ReactSpotifyText";
import React, { useState } from "react";

const meta: Meta<typeof ReactSpotifyText> = {
  component: ReactSpotifyText,
};

type Story = StoryObj<typeof ReactSpotifyText>;
export default meta;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const [text, setText] = useState<string>(
      "This is a really long title, check it out. Check this out."
    );

    return (
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
            textAlign: "center"
          }}
        >
          <input
            style={{ padding: ".5rem" }}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <br />
          <ReactSpotifyText text={text} />
        </div>
      </div>
    );
  },
};
