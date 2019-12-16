# web-cse440-wi20

[![Build Status](https://travis-ci.org/fogies/invoke-base.svg?branch=master)](https://travis-ci.org/fogies/invoke-base)

A course website.

## Project Dependencies

This project is based on a template:

[https://github.com/fogies/invoke-base](https://github.com/fogies/invoke-base)

Runtime dependencies for this project are:
- Python 3.6.6

See [Installation for Windows](https://github.com/fogies/invoke-base/blob/master/readme/install_windows.md).

See [Installation for Mac](https://github.com/fogies/invoke-base/blob/master/readme/install_mac.md).

## Tasks

This project uses Invoke for task execution. Available tasks can be listed:

`invoke -l`

See [Additional Task Documentation](https://github.com/fogies/invoke-base/blob/master/readme/invoke.md).

Frequently used tasks will include:

### compile_config

Compile files specified in `_base_config.yml`, via key `compile_config : entries`.

`invoke compile_config` 

### dependencies_ensure

Ensure dependencies are installed.

`invoke dependencies_ensure` 

