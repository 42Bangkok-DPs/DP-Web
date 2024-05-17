#!/bin/bash

# Count regular files and directories in the current directory
files=$(find . -maxdepth 1 -type f | wc -l)
directories=$(find . -maxdepth 1 -type d | wc -l)

echo "Regular files: $files"
echo "Directories: $directories"
