#!/bin/bash

# Check if arguments are provided
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Create folders with names prefixed by "ex"
for folder_name in "$@"; do
    mkdir "ex${folder_name}"
done
