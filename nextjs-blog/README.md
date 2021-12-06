# Build

```
$ npm run build
# Will do: next build && next export -o build/ && cp -rf build/* ../ && git add -A && git commit -m 'update site' && git push
```

# Notes for deploy

```
1. Rename _next next
2. Replace all path /_next/xxx to /next/xxx
3. Replace all path /next/static/{xxx}/_{yyy}.js to https://raw.githubusercontent.com/longersoft/longersoft.github.io/master/next/static/{xxx}/_{yyy}.js

OR: 2+3
Replace all path /_next/{xxx}/{yyy}.js to https://raw.githubusercontent.com/longersoft/longersoft.github.io/master/next/{xxx}/{yyy}.js

```
