---
title: PRESENTATIONS
description: All slide decks
tags: false
---

{%- for presentation in collections.presentations %}
  - [{{ presentation.data.title}}]({{presentation.url}})
{%- endfor %}
