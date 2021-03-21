---
title: PRESENTATIONS
tags: false
---

{%- for presentation in collections.presentations %}
  - [{{ presentation.data.title}}]({{presentation.url}})
{%- endfor %}
