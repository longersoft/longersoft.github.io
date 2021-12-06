#!/bin/bash

# next build && next export -o build/ 
# cp -rf build/* ../ && git add -A && git commit -m 'update site' && git push

pwd

cp -rf build/* ../

cd ..
WORK_DIR=$(PWD)
echo $WORK_DIR

rm -rf next
mv _next next
rm -f home.html blog.html

# Recursive
# find $WORK_DIR -name '*.html'

for FILE in $(ls $WORK_DIR/*.html); do
  echo $FILE
  # FILE='/Volumes/DATA/Projects/mine/nextjs/longersoft.github.io/index.html'

  sed -i -e 's,/_next/,https://raw.githubusercontent.com/longersoft/longersoft.github.io/master/next/,g' $FILE

  # OR:
  # search='\/_next\/'
  # replace='https:\/\/raw.githubusercontent.com\/longersoft\/longersoft.github.io\/master\/next\/'
  # sed -i -e "s/$search/$replace/g" $FILE

  # OR:
  # sed -i -e 's/\/_next\//https:\/\/raw.githubusercontent.com\/longersoft\/longersoft.github.io\/master\/next\//g' $FILE
done

git add -A && git commit -m 'update site' && git push
