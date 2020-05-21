import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyleReset } from "../styles/reset";
import { GlobalStyleFonts } from "../styles/fonts";
import { theme } from "../styles/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <GlobalStyleReset />
        <GlobalStyleFonts />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    );
  }
}
