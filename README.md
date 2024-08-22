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

### Set-up authentication with Passportjs

1. To set-up authentication with passport with sessions, as well as three strategies (regular email/pw, github, google), install the following dependencies: `npm i connect-mongo express-session passport passport-github2 passport-google-oauth20 passport-local`
   We also need the following types for passport: `npm i -D @types/passport @types/passport-github2 @types/passport-google-oauth20 @types/passport-local`
2. In your backend folder, create a folder you could name `config` that will contain different kinds of configuration files.
   - create a `passport.ts` file
   - at the root of the backend folder, create a `@types` folder with a `passport-user.d.ts` file to define the `_id` to the interface
   - we also need to overwrite the `typeRoots` key in the `tsconfig.json` file like so: `"typeRoots": ["node_modules/@types", "@types"]`
   - finally we need to add the following at the bottom of the `tsconfig.json` file:

```
...},
	"ts-node": {"files": true}
}
```

3. Next we want to register the login route in our user routes:
4. Next we need to configure the sessions. We create a `session.ts` file in the `config` folder
5. Next we mount sessions and passport as middleware in `app.ts`. And we don't forget ot import the passport config at the top of the file.
6. Finally, we need to implement automatic login for users that sign up. In other words, a cookie and a session must be generated for a user that signs up. For this, we revisit the user controller and add a few lines to the signUp function.
