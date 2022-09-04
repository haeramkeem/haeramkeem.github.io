#!/bin/bash

set -e

# Envs
SOURCE_DIR=contents
OUTPUT_DIR=dist/api
OUTPUT=$OUTPUT_DIR/works

# Generate file
mkdir -p $OUTPUT_DIR
echo '[' > $OUTPUT
echo "Build output: $OUTPUT"

# Convert YAML to JSON
for man in $(ls $SOURCE_DIR/*.yaml); do
    echo "Converting $man"
    yq -o json eval $man | jq -c . >> $OUTPUT
done

# Finalize
echo ']' >> $OUTPUT

# Fix JSON syntax
cat $OUTPUT | tr -d '\n' | sed 's/}{/},{/g' | tee $OUTPUT
echo; echo "Done"
