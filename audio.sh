#!/bin/bash

process_filenames() {
  for file in *; do
    if [[ -f "$file" ]]; then
      extension="${file##*.}"
      filename_without_extension="${file%.*}"
      new_filename="${filename_without_extension,,}"
      new_filename="${new_filename//_/-}"
      new_filename="${new_filename//./}"
      new_filename="${new_filename//--/-}"

      if [ "$new_filename" != "$filename_without_extension" ]; then
        new_filename="$new_filename.$extension"
        mv "$file" "$new_filename"
      fi
    fi
  done
}

if [ $# -ne 1 ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

if [ ! -d "$1" ]; then
  echo "Error: Directory not found."
  exit 1
fi

cd "$1" || exit 1

process_filenames

echo "All filenames have been successfully modified."
