#!/bin/bash
cd types
targets=( @emotion @popperjs @mui )
for D in "${targets[@]}"
do
    cd $D
    echo Working on ${D}
    node ../../node_modules/typescript/bin/tsc
    cp ./_dist/${D}.d.ts ../../dist
    cd ..
done
cd ..
