"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HomeHero.module.css";

export function HomeHero({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "home-hero")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading tag="h2">
          {"A Map of the Unexplained"}
        </_Builtin.Heading>
        <_Builtin.Heading tag="h3">
          {
            "Cataloging UFOs, cryptids, conspiracies, and fringe media — organized for the curious mind."
          }
        </_Builtin.Heading>
        <_Builtin.SearchForm
          className={_utils.cx(_styles, "search")}
          action="/search"
        >
          <_Builtin.SearchInput
            className={_utils.cx(_styles, "search-input")}
            autoFocus={true}
            disabled={false}
            maxLength={256}
            name="query"
            placeholder="Search for an artifact, tag, person..."
            required={true}
            type="search"
            id="search"
          />
          <_Builtin.SearchButton type="submit" value="Search" />
        </_Builtin.SearchForm>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
