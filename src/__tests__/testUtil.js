import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

interface Props {
  children: any;
}

const AllTheProviders = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
