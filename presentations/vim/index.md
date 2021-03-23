---
title: VIM
description: All vim presentations
tags: presentations
---

{%- for slide in collections.vim %}
  - [{{ slide.data.title}}]({{slide.url}})
{%- endfor %}
