---
title: TMUX
description: All tmux slides
tags: presentations
---

{%- for slide in collections.tmux %}
  - [{{ slide.data.title}}]({{slide.url}})
{%- endfor %}
