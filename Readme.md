# next-migrate-helper

next-migrate-helper is a toolkit for updating Next Components.

```
Usage: next-migrate [options]

Scan your code and migrate to target version if you need


Options:

  -V, --version          output the version number
  -m --migrate           migrate your source files to target version automatically
  -t --target <version>  target version (default: v1)
  -h, --help             output usage information
```
## example

### Step 1: 
```
tnpm install @ali/next-migrate-helper -g
```

### Step: 2:
```
next-migrate -V 
```
it outputs version number which means the toolkit is successfully installed


### Step 3:
enter the project path
```
cd path-to-your-prject
next-migrate -m ./src
```
suggest will be given
![](https://img.alicdn.com/tfs/TB1xPNyI7voK1RjSZPfXXXPKFXa-1578-1198.png)
