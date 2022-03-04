#!/bin/bash
cd types
targets=( react-declarative csstype )
for D in "${targets[@]}"
do
    cd $D
    echo Working on ${D}
    cp ./index.d.ts ../../dist/${D}.d.ts
    cd ..
done
cd ..
cp ./lib/src/index.d.ts ./dist/index.d.ts
