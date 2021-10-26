/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeaderProps {
  /**
   * The value of the header.
   */
  value?: undefined;
}

export default class Header extends SvelteComponentTyped<HeaderProps, {}, {}> {}
