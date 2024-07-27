# Flowblog

## Description

This is a template app for a full-stack MERN application using Nextjs, TypeScript, authentication with Clerk, and deployment on Vercel. The tutorial can be found on the `codinginflow` website at `https://nextjs.codinginflow.com/`.

## Starting from scratch

### Set-up the front end

In your terminal, create the front end as follows:
`npx create-next-app@latest`

Then answer the prompts as follows:

- OK to proceed? `y`
- What is your project named? `client`
- Would you like to use TypeScript? `Yes`
- Would you like to use ESLint? `Yes`
- Would you like to use Tailwind CSS? `No`
- Would you like to use 'src/' directory? `No`
- Would you like to use App Router? `Yes`
- Would you like to customize the default import alias (@/\*)? `No`

In the newly created `client`, delete the `.git` folder. You will initialize a git repository at the root level instead.

### Set-up the back end

1. In your terminal, create a `server` folder and `cd` into it.
2. Initialize a node project: `npm init -y`. That will create a default `package.json` file
3. Install the dev dependencies `typescript` and `eslint`: `npm i -D typescript eslint`
4. Create the config files for typescript and eslint:

```
npx tsc --init
npx eslint --init
```

For the eslint set-up, you can answer the prompts as follows:

- Ok to proceed? `y`
- How would you like to use ESLint? `problems`
- What type of modules does your project use? `esm`
- Which framework does your project use? `none`
- Does your project use TypeScript? `typescript`
- Where does your code run? `node`
- The config that you've selected requires the following dependencies:
  eslint@9.x, globals, @eslint/js, typescript-eslint
  ✔ Would you like to install them now? `Yes`
- Which package manager do you want to use? `npm`

5. In `server/package.json`, add the following script:
   `"lint": "eslint . --ext .ts"`
6. Add a `.gitignore` file. A template can be found at `https://github.com/github/gitignore/blob/main/Node.gitignore`
7. Edit the `tsconfig.json` file so that the `"outDir"` property has value `"./dist"`, like so:

```
		"outDir": "./dist"
```

8. At the command line, at the root of the `backend` folder, type `npx tsc` whenever you want to execute the typescript compiler. And you can then run the `server.js` file: `node dist/server.js`.
   This can be tedious. So you can instead install the dev dependencies `nodemon` and `ts-node` like so: `npm i -D nodemon ts-node`
   Those two dependencies will work together in development. You can add a script in your `package.json` on the backend like so:
   ```
   "start": "nodemon src/server.ts"
   ```
   or however you would like to name it.
