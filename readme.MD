# React Spotify Text

<b>A small and simple React component inspired by the scrolling text in Spotify</b>

If the text fits within its container, it will not animate. If it overflows it will animate right to left, pausing at the start, with a mask fading out the edges.

![React Spotify Text Example](https://raw.githubusercontent.com/dazzatron/react-spotify-text/master/example.gif)
<small>(This gif is a really low FPS!)</small>

**Note: by default react-spotify-text has no colour/background or font family applied, this is just a demo.**

## Installation

To install:

```bash
npm i react-spotify-text
```

## Usage

The component takes 1 prop: "text" (string)

Most styles applied to a parent element will work and not cause the component to fail. 

Usage example:

```typescript
import ReactSpotifyText from "ReactSpotifyText";

const Example = () => (
  <ReactSpotifyText text="This is a really long title, check it out. Check this out." />
);
```
