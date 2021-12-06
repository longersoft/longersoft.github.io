#!/bin/bash

# next build && next export -o build/ 
# cp -rf build/* ../ && git add -A && git commit -m 'update site' && git push

pwd

# Copy all files from build folder
cp -rf build/* ../

# Go back to root directory
cd ..
WORK_DIR=$(PWD)
echo $WORK_DIR

# Rename folder to fix error for the static paths
rm -rf next
mv _next next

# Clean up
rm -f home.html blog.html

# Recursive
# find $WORK_DIR -name '*.html'

wait
# Replace static paths in html files
for FILE in $(ls $WORK_DIR/*.html); do
  echo $FILE

  sed -ie 's,/_next/,https://raw.githubusercontent.com/longersoft/longersoft.github.io/master/next/,g' $FILE

  # OR:
  # search='\/_next\/'
  # replace='https:\/\/raw.githubusercontent.com\/longersoft\/longersoft.github.io\/master\/next\/'
  # sed -i -e "s/$search/$replace/g" $FILE

  # OR:
  # sed -i -e 's/\/_next\//https:\/\/raw.githubusercontent.com\/longersoft\/longersoft.github.io\/master\/next\//g' $FILE
done

# Add to git and push to origin
git add -A && git commit -m 'update site' && git push
