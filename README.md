# VuePress GitLab pages template

This repo contains all the starter files for running VuePress on GitLab pages.
If you want to read more on VuePress, [check out their website](https://vuepress.vuejs.org/).

## Running locally

This project uses [yarn](), you'll need to install this globally before you can get started.

```
npm install -g yarn
```

Then you need to install the project dependencies:

```
yarn install
```

Now you're ready to go.
To run the local dev server just use the following command:

```
yarn start
```

## Building the site

[.gitlab-ci.yml](./.gitlab-ci.yml) takes care of the deployment to GitLab pages.
If you want to preview a build locally, you can run:

```
yarn build
```

This will build all your files into a `./public` directory.