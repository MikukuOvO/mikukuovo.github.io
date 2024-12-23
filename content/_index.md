---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: resume-biography
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text:
    design:
      css_class: bright
      background:
        color: bright
        image:
          # Add your image background to `assets/media/`.
          filename: bac.png
          filters:
            brightness: 0.9
          size: cover
          position: center
          parallax: false
  # - block: stats
  #   content:
  #     items:
  #       - statistic: "1"
  #         description: |
  #           Publications
  #       - statistic: "9"
  #         description: |
  #           Awards
  #       - statistic: "1"
  #         description: |
  #           Courses
  #   design:
  #     # Section background color (CSS class)
  #     css_class: "bg-gray-100 dark:bg-gray-900"
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  - block: markdown
    content:
      title: 'Welcome 👋'
      subtitle: ''
      text: |-
        I'm dedicated to realizing Auto Computing Vision (ACV), which enables systems to self-manage like cells in the human body.
        Currently, I'm working on building unsupervised, self-regulating microservice systems using the power of LLMs. Feel free to contact me!

    design:
      columns: '1'
  - block: collection
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
