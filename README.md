# JDart-Vis
JDart-Vis is a visualization tool which lively illustrates the constraint trees generated by [JDart](https://github.com/psycopaths/jdart), a dynamic symbolic analysis tool for Java. JDart-Vis can significantly relieve the pain when analyzing the result trees JDart produces for us. The [demo page](http://chaofz.me/jdart-vis) provides a presentation for getting the gist of this tool.

This project is a participation project of [Google Summer of Code 2016 (GSoc 2016)](https://developers.google.com/open-source/gsoc/) under the team [Java Pathfinder](http://babelfish.arc.nasa.gov/trac/jpf). 

### NPM package

JDart-Vis has been published as an NPM package, simply run

```sh
$ npm install --global jdart-viz
```

to install it globally. Step 5 in the next section shows the usages of it.

### Getting Started

#### 1. Install Node.js

First, install Node.js on your machine. If you have already installed node (with npm), you can skip to the next step.

There are various ways to install node. Details can be found on [nodejs.org](https://nodejs.org/en/).

#### 2. Install Gulp globally

Again, skip if installed.

```sh
$ npm install --global gulp-cli
```

#### 3. Install node packages dependencies

Change to the project directory and run

```sh
$ npm install
```

#### 4. Build the project and link it to CLI

```sh
$ gulp build
$ npm link
```

#### 5. Usages

Now you can run `jdart-viz` upon JPF config files as you run `jpf example.jpf` previously.

Initiate the server first

```sh
$ jdart-viz serve
```

then, navigate to the directory containing jpf config files, and run

```sh
$ jdart-viz example.jpf
```

A browser will pop up for you to enjoy the power of this visualization project.

#### 6. Development

If you want to develop more features for it, you can enter the dev mode by

```sh
$ gulp dev
```
