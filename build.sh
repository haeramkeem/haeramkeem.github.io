#!/bin/bash

set -e

build_json() {
    # Envs
    local SOURCE_DIR=$1
    local OUTPUT_DIR=dist/$2
    local OUTPUT=$OUTPUT_DIR/works

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
}

copy_public_data() {
    local SOURCE_DIR=$1
    local OUTPUT_DIR=dist

    cp $SOURCE_DIR/* $OUTPUT_DIR/.
}

build_json contents api
copy_public_data public
