---
_schema: default
title: Search
pageSections:
  - _component: page-sections/heroes/hero-center
    _uuid: 275edef3-d84e-4090-9fd6-0d43a39be11d
    eyebrowIcon: {}
    eyebrowText:
    heading: How can we help?
    headingSize: 2xl
    subtext: >-
      We've indexed every page on our website with the kind of thoroughness that
      borders on excessive.
    buttonSections: []
    sectionHeight: content
    backgroundDecoration: false
    maxContentWidth: 2xl
    colorScheme: light
    backgroundColor: base
    contentBackground: false
    rounded: false
    eyebrow:
  - _component: page-sections/builders/custom-section
    _uuid: 0b4759a5-d14a-4c56-bc5f-1107670c0b9c
    label: ''
    contentSections:
      - _component: building-blocks/core-elements/embed
        _uuid: e2f6d190-fec9-424e-9711-cbcfe23f85d1
        html: |
          <link href="/pagefind/pagefind-ui.css" rel="stylesheet">
          <script src="/pagefind/pagefind-ui.js"></script>
          <div id="search"></div>
          <script>
              window.addEventListener('DOMContentLoaded', (event) => {
                  new PagefindUI({ element: "#search", showSubResults: true });
              });
          </script>
        aspectRatio: landscape
    maxContentWidth: xl
    paddingHorizontal: xl
    paddingVertical: 2xl
    colorScheme: light
    backgroundColor: base
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
    contentBackground: false
description: ''
---
