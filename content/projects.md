---
title: 'Experience'
date: 2023-10-24
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
sections:
  - block: projects
    content:
      title: Projects
      text: Here are a selection of projects that I have worked on over the years.
      # Upload project images to your `assets/media/` folder and reference the filename in the `image` option
      items:
        - title: Pytorch GAT
          description: A pytorch implementation of the GAT model based on the officail code, adding code for plots & using mps for accelerate running on MacOS
          image: pytorch.png
          url: https://github.com/MikukuOvO/PytorchGAT
        - title: RISC-V five-stage pipeline CPU design
          description: Using Verilog to simulate a CPU with interactive and graphics on FPGA board
          image: riscv.png
          url: https://github.com/MikukuOvO/PipelineCPU
        - title: WHU-OPCP-Platfrom
          description: An OPCP platfrom built with Vue + Django, with CGROUP & docker used for the judger, which gives an stable & interactive environment
          image: pytorch.png
          url: https://github.com/hz826/WHU-OPCP
---
